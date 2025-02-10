import * as React from "react";
import * as styles from "styles/Projects.module.scss";
import { Box, Heading } from "@chakra-ui/react";
import PageCard from "components/PageCard";
import { getData } from "@/util/getData";

const ProjectsPage = async () => {
  const data = await getData("app/(posts)/projects");
  return (
    <>
      <Heading>My Projects!</Heading>
      <Box className={styles.projectStyles}>
        {data
          .filter(({ module: { frontmatter } }) => !frontmatter!.draft)
          .map(({ module: { frontmatter } }) => (
            <PageCard
              key={frontmatter.title}
              title={frontmatter.title}
              date={frontmatter.date}
              slug={`projects/${frontmatter.slug}`}
              abstract={frontmatter.abstract}
              frontImage={frontmatter.featuredImage}
            />
          ))}
      </Box>
    </>
  );
};

export default ProjectsPage;

export const metadata = {
  title: "Peter's Blog!",
};
