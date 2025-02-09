import * as React from "react";
import * as styles from "styles/index.module.scss";
import { graphql, PageProps } from "gatsby";
import PageTemplate from "components/PageTemplate";
import { Heading } from "@chakra-ui/react";

export default function BlogPostTemplate({
  data,
}: PageProps<Queries.ProjectDataQuery>) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark!;
  return (
    <PageTemplate>
      <Heading>{frontmatter?.title}</Heading>
      <Heading size="sm">{frontmatter?.date}</Heading>
      <br></br>
      <div
        className={styles.articleStyles}
        dangerouslySetInnerHTML={{
          __html: html || "this page is under construction! Check back later.",
        }}
      />
    </PageTemplate>
  );
}

export const pageQuery = graphql`
  query ProjectData($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
