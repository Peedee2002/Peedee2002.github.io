import * as React from "react";
import styles from "styles/Projects.module.scss";
import { Box, Heading } from "@chakra-ui/react";
import PageCard from "components/PageCard";
import { getData } from "@/util/getData";

const BlogPage = async () => {
  const data = await getData("app/(posts)/blog");
  return (
    <>
      <Heading size="4xl">My Blog!</Heading>
      <Box className={styles.projectStyles}>
        {data
          .filter(({ module: { frontmatter } }) => !frontmatter!.draft)
          .map(({ module: { frontmatter } }) => (
            <PageCard
              key={frontmatter.title}
              title={frontmatter.title}
              date={frontmatter.date}
              slug={`blog/${frontmatter.slug}`}
              abstract={frontmatter.abstract}
              frontImage={frontmatter.featuredImage}
            />
          ))}
      </Box>
    </>
  );
};

export default BlogPage;

export const metadata = {
  title: "Peter's Blog!",
};
