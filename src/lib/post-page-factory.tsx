import { PostPageTemplate } from "@/components/PostPageTemplate";
import { readMDXFile } from "./mdx-utils";

interface PageParams {
  params: Promise<{ slug: string }>;
}

/**
 * Create the Page component for a dynamic post route.
 * This is extracted to a .tsx file to properly handle JSX.
 */
export function createPageComponent(section: string) {
  const contentDir = section as "blog" | "projects";

  return async function Page({ params }: PageParams) {
    const { slug } = await params;
    const { data, content } = await readMDXFile(contentDir, slug);

    return (
      <PostPageTemplate
        title={data.title}
        abstract={data.abstract}
        date={data.date}
        content={content}
      />
    );
  };
}
