import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import * as styles from "styles/Story.module.scss";

type FrontMatter = {
  edited: string | null;
  created: string | null;
  title: string | null;
};
type StoryProps = {
  frontmatter: FrontMatter;
  html: string | null;
};

const Story = ({ frontmatter, html }: StoryProps) => {
  return (
    <Box className={styles.story}>
      <Heading size="md">{frontmatter?.title}</Heading>
      <br />
      <Box className={styles.experienceChunk}>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: html || "" }}
        />
      </Box>
    </Box>
  );
};

export default Story;
