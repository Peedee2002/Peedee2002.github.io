import React from "react";
import * as styles from "styles/MyExperiences.module.scss";
import Img from "gatsby-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Box, Button, Heading, StepTitle, Text } from "@chakra-ui/react";

// TODO: turn into a markdown
export const EXPERIENCES = [
  {
    title: "Nine Entertainment",
    description: "/",
    photo: "nine",
  },
  {
    title: "Amazon Web Services",
    description: "",
    photo: "aws",
  },
  {
    title: "UNSW",
    description: "",
    photo: "unsw",
  },
  {
    title: "ResMed Corp",
    description: "",
    photo: "resmed",
  },
  {
    title: "CSESoc Hackathon",
    description: "",
    photo: "csesoc",
  },
];

const MyExperiences = () => {
  const images = useStaticQuery(graphql`
    query {
      aws: file(relativePath: { eq: "aws.jpg" }) {
        publicURL
      }
      nine: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      unsw: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      resmed: file(relativePath: { eq: "resume.svg" }) {
        publicURL
      }
      csesoc: file(relativePath: { eq: "resume.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <>
      <Heading>My Experiences</Heading>
      {EXPERIENCES.map(({ title, description, photo }) => (
        <Box>
          <Heading size="md">{title}</Heading>
          <Box className={styles.experienceChunk}>
            <p className={styles.description}>{description}</p>
            <img height={100} width={175} src={images[photo].publicURL} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default MyExperiences;
