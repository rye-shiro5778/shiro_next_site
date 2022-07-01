import { writeFile } from "fs/promises";
import { client } from "./cmsClient";
import { Category, MicroCMSContentId, MicroCMSDate, Tag } from "./type";

async function makeCategoryJson() {
  try {
    const categories = await client.categories.$get();
    const data = categories.contents.map(
      (category: Category & MicroCMSContentId & MicroCMSDate) => category.name
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
    const tags = await client.tags.$get();
    const data = tags.contents.map(
      (tag: Tag & MicroCMSContentId & MicroCMSDate) => tag.name
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
