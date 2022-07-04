import { load } from "cheerio";
import hljs from "highlight.js";

export function parseByCheerio(content: string): string {
  const cheerio = load(content);
  cheerio("pre code").each((_, elm) => {
    const result = hljs.highlightAuto(cheerio(elm).text());
    cheerio(elm).html(result.value);
    cheerio(elm).addClass("hljs");
  });
  return cheerio.html();
}
