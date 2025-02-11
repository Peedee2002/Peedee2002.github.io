import { Card } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "styles/PageCard.module.scss";

type PageCardProps = {
  title: string | null;
  date: string | null;
  slug: string;
  abstract: string | null;
  frontImage: string;
};

const PageCard = ({
  title,
  date,
  slug,
  abstract,
  frontImage,
}: PageCardProps) => {
  return (
    <Link href={slug} style={{ width: "65%" }}>
      <Card.Root className={styles.card}>
        {frontImage && <img src={frontImage} />}
        <Card.Header fontSize={30}>{title}</Card.Header>
        <Card.Body>{abstract}</Card.Body>
        <Card.Footer>{date}</Card.Footer>
      </Card.Root>
    </Link>
  );
};

export default PageCard;
