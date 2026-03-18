import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface PostFrontmatter {
  title: string;
  abstract: string;
  slug: string;
  date?: string;
  draft?: boolean;
  featuredImage?: string;
  [key: string]: any;
}

export interface Post extends PostFrontmatter {
  slug: string;
}

export interface ExperienceFrontmatter {
  title: string;
  created?: string;
  edited?: string;
  slug?: string;
  draft?: boolean;
  [key: string]: any;
}

export interface Experience {
  company: string;
  frontmatter: ExperienceFrontmatter;
  content: string;
}

/**
 * Generic loader for MDX content from a specified directory.
 * Parses frontmatter and handles slug normalization.
 */
async function loadContent(
  contentDir: string,
  options?: { sortByDate?: boolean; returnContent?: boolean },
) {
  const dirPath = path.join(process.cwd(), `content/${contentDir}`);
  try {
    const files = await fs.readdir(dirPath);
    const items = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const filePath = path.join(dirPath, file);
          const source = await fs.readFile(filePath, "utf-8");
          const { data, content } = matter(source);
          const filenameSlug = file.replace(/\.mdx$/, "");
          let slug = (data as any).slug || filenameSlug;

          // Normalize slug: remove leading slash
          if (slug.startsWith("/")) {
            slug = slug.substring(1);
          }

          const item: any = {
            ...(data as PostFrontmatter),
            slug,
          };

          if (options?.returnContent) {
            item.content = content;
          }

          return item;
        }),
    );

    // Sort by date if requested
    if (options?.sortByDate) {
      items.sort((a, b) => {
        const dateA = new Date(a.date || 0).getTime();
        const dateB = new Date(b.date || 0).getTime();
        return dateB - dateA;
      });
    }

    return items;
  } catch (error) {
    console.error(`Error reading content from ${contentDir}:`, error);
    return [];
  }
}

export async function getMDXFile(filePath: string) {
  try {
    const source = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(source);
    return { frontmatter: data, content };
  } catch (error) {
    console.error(`Error reading MDX file at ${filePath}:`, error);
    throw error;
  }
}

export async function getBlogPosts(): Promise<Post[]> {
  return loadContent("blog", { sortByDate: true }) as Promise<Post[]>;
}

export async function getProjectPosts(): Promise<Post[]> {
  return loadContent("projects") as Promise<Post[]>;
}

export async function getExperiences(): Promise<Experience[]> {
  const items = (await loadContent("experiences", {
    returnContent: true,
  })) as any[];
  return items.map((item) => ({
    company: item.slug,
    frontmatter: item,
    content: item.content,
  }));
}

