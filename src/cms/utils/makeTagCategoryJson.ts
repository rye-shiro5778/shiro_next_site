import { writeFile } from "fs/promises";
import { client } from "./cmsClient";
import { Category, MicroCMSListResponse, Tag } from "./type";

async function makeCategoryJson() {
  try {
    const categories: MicroCMSListResponse<Category> =
      await client.categories.$get();
    const data = categories.contents.map(
      ({ slug, name }: { slug: string; name: string }) => {
        return {
          slug,
          name,
        };
      }
    );
    const reverse = data.reverse();
    await writeFile(
      "./src/constant/categories.json",
      JSON.stringify(reverse, null, 4)
    );
    return;
  } catch (e) {
    throw e;
  }
}

async function makeTagJson() {
  try {
    const tags: MicroCMSListResponse<Tag> = await client.tags.$get();
    const data = tags.contents.map(
      ({ slug, name }: { slug: string; name: string }) => {
        return {
          slug,
          name,
        };
      }
    );
    const reverse = data.reverse();
    await writeFile(
      "./src/constant/tags.json",
      JSON.stringify(reverse, null, 4)
    );
    return;
  } catch (e) {
    throw e;
  }
}

export async function makeTagCategoryJson() {
  await Promise.all([makeCategoryJson(), makeTagJson()]);
}
