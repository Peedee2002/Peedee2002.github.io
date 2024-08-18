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
  const images = useStaticQuery<Queries.UsefulLinksQuery>(graphql`
    query UsefulLinks {
      discord: file(relativePath: { eq: "discord.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      resume: file(relativePath: { eq: "resume.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <Box className={styles.linkBox}>
      {Object.keys(LINKS).map((site) => {
        const mysite = site as keyof typeof LINKS;
        return (
          <a key={site} href={LINKS[mysite]}>
            <Box>
              <img
                className={styles.image}
                height={50}
                width={50}
                src={images[mysite]!.publicURL || undefined}
              />
              {site}
            </Box>
          </a>
        );
      })}
    </Box>
  );
};

export default UsefulLinks;
