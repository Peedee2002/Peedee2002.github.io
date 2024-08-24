import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import * as styles from "styles/PageCard.module.scss";

type PageCardProps = {
  title: string | null;
  date: string | null;
  slug: string;
  abstract: string | null;
  frontImage: IGatsbyImageData | null;
};

const PageCard = ({
  title,
  date,
  slug,
  abstract,
  frontImage,
}: PageCardProps) => {
  return (
    <Link to={slug} style={{ width: "65%" }}>
      <Card className={styles.card}>
        {frontImage && <GatsbyImage image={frontImage} alt={title + " logo"} />}
        <CardHeader fontSize={30}>{title}</CardHeader>
        <CardBody>{abstract}</CardBody>
        <CardFooter>{date}</CardFooter>
      </Card>
    </Link>
  );
};

export default PageCard;
