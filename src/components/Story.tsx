import React, { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";
import * as styles from "styles/Story.module.scss";

type StoryProps = {
  title: string;
  description: ReactNode;
  photo: ReactNode;
};

const Story = ({ title, description, photo }: StoryProps) => {
  return (
    <Box className={styles.story}>
      <Heading size="md">{title}</Heading>
      <br />
      <Box className={styles.experienceChunk}>
        <div className={styles.description}>{description}</div>
        {photo}
      </Box>
    </Box>
  );
};

export default Story;
