import * as React from "react";
import { graphql, PageProps, type HeadFC } from "gatsby";
import * as styles from "styles/Projects.module.scss";
import PageTemplate from "components/PageTemplate";
import { Box, Heading } from "@chakra-ui/react";
import PageCard from "components/PageCard";

const BlogPage = ({ data }: PageProps<Queries.ProjectsQuery>) => {
  return (
    <PageTemplate>
      <Heading>My Projects</Heading>
      <Box className={styles.projectStyles}>
        {data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => (
          <PageCard
            title={frontmatter!.title}
            date={frontmatter!.date}
            slug={"/projects" + frontmatter!.slug}
            abstract={frontmatter!.abstract}
            frontImage={
              frontmatter!.featuredImage?.childImageSharp?.gatsbyImageData ||
              null
            }
          />
        ))}
      </Box>
    </PageTemplate>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Peter Derias</title>;

export const query = graphql`
  query Projects {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
            abstract
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
      }
    }
  }
`;
