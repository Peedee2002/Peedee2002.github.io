import { readdir } from "fs/promises";

export async function getData(dir: string, isDirect = false) {
  return await Promise.all(
    (await readdir(`src/${dir}`)).map(async (filename) => {
      const leaf = isDirect ? filename : `${filename}/page.mdx`;
      return {
        module: await import(`../${dir}/${leaf}`),
        filename: filename,
      };
    }),
  );
}
