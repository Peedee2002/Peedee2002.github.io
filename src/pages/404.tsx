import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import * as styles from "styles/index.module.scss";
import * as pageStyles from "styles/PageTemplate.module.scss";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className={pageStyles.pageStyles}>
      <h1 className={styles.headingStyles}>Page not found</h1>
      <p className={styles.paragraphStyles}>
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in{" "}
            <code className={styles.codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
