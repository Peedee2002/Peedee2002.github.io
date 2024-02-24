import * as React from "react";
import type { HeadFC } from "gatsby";
import * as styles from "styles/index.module.scss";
import PageTemplate from "components/PageTemplate";
import { Heading, Highlight } from "@chakra-ui/react";

const BlogPage = () => {
  return (
    <PageTemplate>
      <Heading className={styles.headingStyles}>
        <Highlight query={["spotlight", "emphasize"]}>
          Hi! I am Peter Derias.
        </Highlight>
      </Heading>
      This page is under construction! Check back later.
    </PageTemplate>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Peter Derias</title>;
