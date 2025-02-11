import React from "react";
import * as styles from "styles/PageTemplate.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.articleStyles}>{children}</div>;
}
