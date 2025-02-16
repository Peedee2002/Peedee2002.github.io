import React from "react";
import { Box } from "@chakra-ui/react";
import styles from "styles/UsefulLinks.module.scss";
import Image from "next-image-export-optimizer";

export const LINKS = {
  github: "https://github.com/Peedee2002",
  linkedin: "https://www.linkedin.com/in/peter-derias",
  discord: "https://discord.com/users/529824435448840213",
  resume: "/Resume.pdf",
};

const UsefulLinks = () => {
  return (
    <Box className={styles.linkBox}>
      {Object.keys(LINKS).map((site) => {
        const mysite = site as keyof typeof LINKS;
        return (
          <a key={site} href={LINKS[mysite]}>
            <Box>
              <Image
                className={styles.image}
                height={50}
                width={50}
                alt={`logo of ${mysite}`}
                src={`/images/links/${mysite}.svg`}
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
