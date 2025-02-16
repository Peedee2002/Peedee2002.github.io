import { Card } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
        <div>
          {frontImage && (
            <Image
              width={1980}
              height={1080}
              src={frontImage}
              alt={`pretty image associated with article ${title}`}
            />
          )}
        </div>
        <Card.Header fontSize={30}>{title}</Card.Header>
        <Card.Body>{abstract}</Card.Body>
        <Card.Footer>{date}</Card.Footer>
      </Card.Root>
    </Link>
  );
};

export default PageCard;
