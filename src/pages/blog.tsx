import * as React from "react";
import type { HeadFC } from "gatsby";
import PageTemplate from "components/PageTemplate";

const BlogPage = () => {
  return (
    <PageTemplate>
      This page is under construction! Check back later.
    </PageTemplate>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Peter Derias</title>;
