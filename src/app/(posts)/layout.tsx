import React from "react";
import styles from "@/styles/PageTemplate.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.articleStyles}>{children}</div>;
}
