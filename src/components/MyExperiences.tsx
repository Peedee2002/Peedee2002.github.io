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
      unsw: file(relativePath: { eq: "github.png" }) {
        publicURL
      }
      resmed: file(relativePath: { eq: "resume.png" }) {
        publicURL
      }
      csesoc: file(relativePath: { eq: "resume.png" }) {
        publicURL
      }
    }
  `);
  console.log(images);
  return (
    <>
      <Heading>My Experiences</Heading>
      {EXPERIENCES.map(({ title, description, photo }) => (
        <Box>
          <Heading size="md">{title}</Heading>
          <p>{description}</p>
          <img src={images[photo].publicURL} />
        </Box>
      ))}
    </>
  );
};

export default MyExperiences;
