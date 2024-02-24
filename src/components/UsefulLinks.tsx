import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box } from "@chakra-ui/react";
import * as styles from "styles/UsefulLinks.module.scss";

export const LINKS = {
  github: "https://github.com/Peedee2002",
  linkedin: "https://www.linkedin.com/in/peter-derias",
  discord: "https://discord.com/users/529824435448840213",
  resume: "/Resume.pdf",
};

const UsefulLinks = () => {
  const images = useStaticQuery(graphql`
    query {
      discord: file(relativePath: { eq: "discord.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.png" }) {
        publicURL
      }
      resume: file(relativePath: { eq: "resume.png" }) {
        publicURL
      }
    }
  `);
  return (
    <Box className={styles.linkBox}>
      {Object.keys(LINKS).map((site) => (
        <a href={(LINKS as any)[site]}>
          <Box>
            <img
              className={styles.image}
              height={50}
              width={50}
              src={images[site]?.publicURL}
            />
            {site}
          </Box>
        </a>
      ))}
    </Box>
  );
};

export default UsefulLinks;
