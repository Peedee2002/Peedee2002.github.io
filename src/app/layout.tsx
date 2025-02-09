import React from "react";
import { Provider } from "@/components/ui/provider";
import { Box, Heading } from "@chakra-ui/react";
import * as styles from "styles/PageTemplate.module.scss";
import Header from "components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <main className={styles.pageStyles}>
            <Header />
            <Box className={styles.restStyles}>
              <Heading className={styles.headingStyles}>
                Hi! I am Peter Derias.
              </Heading>
              {children}
            </Box>
          </main>
        </Provider>
      </body>
    </html>
  );
}
