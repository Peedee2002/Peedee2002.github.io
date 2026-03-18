import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { createPageComponent } from "./post-page-factory";
import { getBlogPosts, getProjectPosts } from "./content-loader";
import { Metadata } from "next";

interface PageParams {
  params: Promise<{ slug: string }>;
}

/**
 * Read and parse an MDX file from the content directory.
 */
export async function readMDXFile(contentDir: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    `content/${contentDir}/${slug}.mdx`,
  );
  const source = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(source);
  return { data, content };
}

/**
 * Extract metadata from an MDX file for use in generateMetadata.
 */
export async function getMDXMetadata(contentDir: string, slug: string): Promise<Metadata> {
  const { data } = await readMDXFile(contentDir, slug);
  return {
    title: data.title,
    description: data.abstract,
  };
}

/**
 * Create a complete dynamic post page with generateStaticParams, generateMetadata, and default export.
 * Pass the section name (e.g., "blog", "projects") and it returns all required exports.
 *
 * Usage in page.tsx:
 * ```
 * import { createDynamicPostPage } from "@/lib/mdx-utils";
 * const { generateStaticParams, generateMetadata, Page } = createDynamicPostPage("blog");
 * export { generateStaticParams, generateMetadata };
 * export default Page;
 * ```
 */
export function createDynamicPostPage(section: string) {
  const getterMap: Record<string, () => Promise<any[]>> = {
    blog: getBlogPosts,
    projects: getProjectPosts,
  };

  const getter = getterMap[section] || getBlogPosts;

  const generateStaticParams = async () => {
    const posts = await getter();
    return posts.map((post) => ({ slug: post.slug }));
  };

  const generateMetadata = async ({ params }: PageParams) => {
    const { slug } = await params;
    return getMDXMetadata(section, slug);
  };

  const Page = createPageComponent(section);

  return { generateStaticParams, generateMetadata, Page };
}
