import { load } from "cheerio";
import { CheerioAPI } from "cheerio/lib/load";
import hljs from "highlight.js";
import { getLinkPreview } from "link-preview-js";
import { UrlPreview } from "./types/urlPreview";

export async function parseByCheerio(content: string) {
  const cheerio = load(content);
  parseCode(cheerio);
  parsePreCode(cheerio);

  await parseAnchor(cheerio);

  return cheerio.html();
}

async function parseCode(cheerio: CheerioAPI) {
  cheerio("code").each((_, elm) => {
    cheerio(elm).addClass("code-oneline");
  });
}

async function parsePreCode(cheerio: CheerioAPI) {
  cheerio("pre code").each((_, elm) => {
    let text = cheerio(elm).text();
    const reg = /`(.*)`\n/;

    if (text.startsWith("`") && text.match(reg)?.[0]) {
      const title = text.split(reg)[1];
      cheerio(elm).before(`<i>${title}</i>`);
      text = text.split(reg)[2];
    }
    const { value } = hljs.highlightAuto(text);
    cheerio(elm).html(value);
    cheerio(elm).addClass("hljs");
    cheerio(elm).removeClass("code-oneline");
  });
}

async function parseAnchor(cheerio: CheerioAPI) {
  const promiseList: Promise<UrlPreview>[] = [];
  cheerio("a").each((_, elm) => {
    const text = cheerio(elm).text();
    const href = cheerio(elm).attr("href");
    if (text === href) {
      promiseList.push(getLinkPreview(href));
    }
  });
  if (promiseList.length === 0) {
    return;
  }

  try {
    const dataList = await Promise.all(promiseList);
    const map: Map<string, UrlPreview> = new Map();
    dataList.forEach((data) => {
      if ("title" in data) {
        map.set(data.url, data);
      }
    });
    cheerio("a").each((_, elm) => {
      const text = cheerio(elm).text();
      const href = cheerio(elm).attr("href");
      const data = map.get(href!);
      if (!data || !("title" in data)) {
        return;
      }

      cheerio(elm).empty();
      cheerio(elm).append(
        `
          <div class="py-2 md:py-4 flex justify-center hover:-translate-y-1">
          <div class="bg-white flex max-w-5xl shadow-lg rounded-md">
              <div class="w-1/3 ">
                  <div 
                    class="bg-slate-300 bg-cover rounded-md h-full" 
                    style="background-image:url(${data.images[0]})"
                  >
                  </div>
              </div>
              <div class="max-w-xs w-2/3 px-6 py-8 lg:max-w-3xl">
                  <div class="text-sm sm:text-md md:text-lg  font-bold text-gray-800 truncate">
                    ${data.title}
                  </div>
                  <div class="mt-4 text-xs sm:text-sm text-gray-600 truncate">
                    ${data.description}
                  </div>
              </div>
          </div>
          </div> 
        `
      );
    });
  } catch {}
}
