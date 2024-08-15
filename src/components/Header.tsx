import React from "react";
import * as styles from "styles/Header.module.scss";
import { Link } from "gatsby";
import { Box, Button } from "@chakra-ui/react";

export const HEADERS = [
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
          <Link to={slug} activeStyle={{}}>
            <Button colorScheme="green">{name}</Button>
          </Link>
        </div>
      ))}
    </Box>
  );
};

export default Header;
