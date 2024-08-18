import React, { PropsWithChildren } from "react";
import * as styles from "styles/PageTemplate.module.scss";
import Header from "components/Header";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";

const PageTemplate = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider>
      <main className={styles.pageStyles}>
        <Header />
        <Box className={styles.restStyles}>
          <Heading className={styles.headingStyles}>
            Hi! I am Peter Derias.
          </Heading>
          {children}
        </Box>
      </main>
    </ChakraProvider>
  );
};

export default PageTemplate;
