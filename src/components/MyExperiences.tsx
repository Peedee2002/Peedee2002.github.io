import React from "react";
import { Heading } from "@chakra-ui/react";
import Story from "./Story";

const MyExperiences = () => {
  const data = useStaticQuery<Queries.MyExperiencesQuery>(graphql`
    query MyExperiences {
      allMarkdownRemark(
        limit: 2000
        sort: { frontmatter: { edited: DESC } }
        filter: { fileAbsolutePath: { regex: "/experiences/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              created(formatString: "DD MMMM, YYYY")
              edited(formatString: "DD MMMM, YYYY")
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <Heading>My Experiences!</Heading>
      {data.allMarkdownRemark.edges.map(({ node: { frontmatter, html } }) => (
        <Story
          key={frontmatter!.title}
          frontmatter={frontmatter!}
          html={html}
        />
      ))}
    </>
  );
};

export default MyExperiences;
