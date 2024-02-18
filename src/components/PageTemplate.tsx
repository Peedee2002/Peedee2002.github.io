import React, { PropsWithChildren } from "react";
import * as styles from "styles/PageTemplate.module.scss";
import Header from "components/Header";

const PageTemplate = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.pageStyles}>
      <Header />
      {children}
    </main>
  );
};

export default PageTemplate;
