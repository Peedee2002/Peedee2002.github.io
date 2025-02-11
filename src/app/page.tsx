import * as React from "react";
import styles from "styles/index.module.scss";
import UsefulLinks from "components/UsefulLinks";
import MyExperiences from "components/MyExperiences";

const IndexPage = () => {
  return (
    <>
      <UsefulLinks />
      <br />
      <p className={styles.paragraphStyles}>
        I am a full-stack engineer with experience in cloud architecture, data
        pipelines, networks, and DevOps tooling. I have a bit over 2 years of
        experience working as a software engineer. Keep reading for details on
        my experience, my interests (through my blogs) and my projects!
      </p>
      <MyExperiences />
    </>
  );
};

export default IndexPage;

export const metadata = {
  title: "Peter Derias",
};
