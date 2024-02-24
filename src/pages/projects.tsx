import * as React from "react";
import type { HeadFC } from "gatsby";
import * as styles from "styles/index.module.scss";
import PageTemplate from "components/PageTemplate";
import { Heading, Highlight } from "@chakra-ui/react";

// TODO: turn into a markdown
export const EXPERIENCES = [
  {
    title: "Circles",
    description: "",
    photo: "circles",
  },
  {
    title: "Syphon",
    description: "",
    photo: "syphon",
  },
  {
    title: "CSESoc Hackathon",
    description: "",
    photo: "csesoc",
  },
  {
    title: "WIT Hackathon",
    description: "",
    photo: "wit",
  },
];

const BlogPage = () => {
  return (
    <PageTemplate>
      <Heading className={styles.headingStyles}>
        <Highlight query={["spotlight", "emphasize"]}>
          Hi! I am Peter Derias.
        </Highlight>
      </Heading>
    </PageTemplate>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Peter Derias</title>;
