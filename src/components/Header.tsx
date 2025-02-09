import React from "react";
import * as styles from "styles/Header.module.scss";
import Link from "next/link";
import { Box, Button } from "@chakra-ui/react";

const HEADERS = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Projects",
    slug: "/projects",
  },
  {
    name: "Blog",
    slug: "/blog",
  },
];

const Header = () => {
  return (
    <Box bg="green" className={styles.header}>
      {HEADERS.map(({ name, slug }) => (
        <div key={name} className={styles.headerItem}>
          <Link href={slug}>
            <Button colorScheme="green">{name}</Button>
          </Link>
        </div>
      ))}
    </Box>
  );
};

export default Header;
