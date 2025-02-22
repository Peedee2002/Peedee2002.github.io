import React from "react";
import { Provider } from "@/components/ui/provider";
import { Box, Heading } from "@chakra-ui/react";
import styles from "styles/PageTemplate.module.scss";
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
              <Heading
                key="heading"
                size="2xl"
                className={styles.headingStyles}
              >
                Hi! I am Peter Derias.
              </Heading>
              <div key="myBody">{children}</div>
            </Box>
          </main>
        </Provider>
      </body>
    </html>
  );
}
