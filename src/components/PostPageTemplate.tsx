import { MDXRemote } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";

interface PostPageTemplateProps {
  title: string;
  abstract: string;
  date?: string;
  content: string;
}

export async function PostPageTemplate({
  title,
  abstract,
  date,
  content,
}: PostPageTemplateProps) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <p>{abstract}</p>
        {date && <time>{date}</time>}
      </header>
      <MDXRemote source={content} />
    </article>
  );
}
