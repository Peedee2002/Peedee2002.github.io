import * as React from "react";
import type { HeadFC } from "gatsby";
import * as styles from "styles/index.module.scss";
import UsefulLinks from "components/UsefulLinks";
import PageTemplate from "components/PageTemplate";

const IndexPage = () => {
  return (
    <PageTemplate>
      <h1 className={styles.headingStyles}>Hi! I am Peter Derias.</h1>
      <UsefulLinks />
      <p className={styles.paragraphStyles}>
        I am a full-stack engineer with experience in cloud architecture, data
        pipelines, and DevOps tooling. I have 2 years of experience working as a
        software engineer. Check out the rest of the website for details on my
        experience, my interests (through my blogs) and my projects!
      </p>
    </PageTemplate>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Peter Derias</title>;
