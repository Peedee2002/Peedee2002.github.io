import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import * as styles from "styles/index.module.scss";
import PageTemplate from "components/PageTemplate";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <h1>Page not found</h1>
      <p className={styles.paragraphStyles}>
        Sorry 😔, we couldn&apos;t find what you were looking for.
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
        <Link to="/">Click here to Go home</Link>.
      </p>
    </PageTemplate>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Peter Can't find you!</title>;
