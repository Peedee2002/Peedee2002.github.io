import React, { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";
import * as styles from "styles/Story.module.scss";

type FrontMatter = {
  edited: string | null;
  created: string | null;
  title: string | null;
};
type StoryProps = {
  frontmatter: FrontMatter;
  mdx: ReactNode;
  company: string;
};

function capitalizeFirstLetter(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

const Story = ({ frontmatter, mdx, company }: StoryProps) => {
  return (
    <Box className={styles.story}>
      <Heading size="xl">{frontmatter.title}</Heading>
      <Box className={styles.experienceChunk}>
        <div className={styles.description} />
        <div className={styles.content}>
          <div>{mdx}</div>
          <div className={styles.badge}>
            <img
              src={`/images/experiences/${company}.png`}
              alt={`Peter's ${capitalizeFirstLetter(company)} Badge`}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Story;
