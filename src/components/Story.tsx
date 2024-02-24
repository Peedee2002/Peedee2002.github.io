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
        <p className={styles.description}>{description}</p>
        {photo}
      </Box>
    </Box>
  );
};

export default Story;
