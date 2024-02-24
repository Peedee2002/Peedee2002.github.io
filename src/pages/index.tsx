import * as React from "react";
import { type HeadFC } from "gatsby";
import * as styles from "styles/index.module.scss";
import UsefulLinks from "components/UsefulLinks";
import PageTemplate from "components/PageTemplate";
import { Heading, Highlight } from "@chakra-ui/react";
import MyExperiences from "components/MyExperiences";

const IndexPage = () => {
  return (
    <PageTemplate>
      <Heading className={styles.headingStyles}>
        <Highlight query={["spotlight", "emphasize"]}>
          Hi! I am Peter Derias.
        </Highlight>
      </Heading>
      <UsefulLinks />
      <br />
      <p className={styles.paragraphStyles}>
        I am a full-stack engineer with experience in cloud architecture, data
        pipelines, and DevOps tooling. I have 2 years of experience working as a
        software engineer. Keep reading for details on my experience, my
        interests (through my blogs) and my projects!
      </p>
      <MyExperiences />
    </PageTemplate>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Peter Derias</title>;
