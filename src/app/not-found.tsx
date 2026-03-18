import * as React from "react";
import styles from "styles/index.module.scss";
import Link from "next/link";
import { Metadata } from "next";

const NotFoundPage = () => {
  return (
    <>
      <h1>Page not found</h1>
      <p className={styles.paragraphStyles}>
        Sorry 😔, we couldn&apos;t find what you were looking for.
        <br />
        <br />
        <Link href="/">Click here to Go home</Link>.
      </p>
    </>
  );
};

export default NotFoundPage;

export const metadata: Metadata = {
  title: "Peter Can't find you!",
};
