import React from "react";
import * as styles from "styles/MyExperiences.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import { Heading } from "@chakra-ui/react";
import Story from "./Story";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// TODO: turn into a markdown
export const EXPERIENCES = [
  {
    title: "Nine Entertainment",
    description: (
      <p>
        I helped in the collection and analysis of data from applications
        ranging from the SMH, the Age, and 9Now. user events such as page views,
        user stories and page events were triggered in a systematic way from
        various differing applications and tech stacks. <br /> I also started
        and handed off a project over 1 month to re-architect a data team's
        infrastructure in GCP by leveraging Composer and Docker, to support
        local development and to deliver cost savings and reliability
        improvements. This led to dramatic speedups in our development iteration
        cycles, which would take at least 5 minutes previously. They were now a
        minute at most. This is the project I have continued as a graduate
        engineer.
        <br />
        Most importantly, I got to meet some incredible engineers who were
        driven by both innovation and product improvement. I was inspired by the
        work done at nine to balance the needs of the business to the needs of
        the engineers. I saw how to effectively communicate with people from
        diverse fields.
      </p>
    ),
    photo: "nine",
  },
  {
    title: "Amazon Web Services",
    description: (
      <p>
        I helped in the collection and analysis of data from applications
        ranging from the SMH, the Age, and 9Now. user events such as page views,
        user stories and page events were triggered in a systematic way from
        various differing applications and tech stacks. <br /> I also started
        and handed off a project over 1 month to re-architect a data team's
        infrastructure in GCP by leveraging Composer and Docker, to support
        local development and to deliver cost savings and reliability
        improvements. This led to dramatic speedups in our development iteration
        cycles, which would take at least 5 minutes previously. They were now a
        minute at most. This is the project I have continued as a graduate
        engineer.
        <br />
        Most importantly, I got to meet some incredible engineers who were
        driven by both innovation and product improvement. I was inspired by the
        work done at nine to balance the needs of the business to the needs of
        the engineers. I saw how to effectively communicate with people from
        diverse fields.
      </p>
    ),
    photo: "aws",
  },
  {
    title: "UNSW",
    description: (
      <p>
        I helped in the collection and analysis of data from applications
        ranging from the SMH, the Age, and 9Now. user events such as page views,
        user stories and page events were triggered in a systematic way from
        various differing applications and tech stacks. <br /> I also started
        and handed off a project over 1 month to re-architect a data team's
        infrastructure in GCP by leveraging Composer and Docker, to support
        local development and to deliver cost savings and reliability
        improvements. This led to dramatic speedups in our development iteration
        cycles, which would take at least 5 minutes previously. They were now a
        minute at most. This is the project I have continued as a graduate
        engineer.
        <br />
        Most importantly, I got to meet some incredible engineers who were
        driven by both innovation and product improvement. I was inspired by the
        work done at nine to balance the needs of the business to the needs of
        the engineers. I saw how to effectively communicate with people from
        diverse fields.
      </p>
    ),
    photo: "unsw",
  },
  {
    title: "ResMed Corp",
    description: (
      <p>
        I helped in the collection and analysis of data from applications
        ranging from the SMH, the Age, and 9Now. user events such as page views,
        user stories and page events were triggered in a systematic way from
        various differing applications and tech stacks. <br /> I also started
        and handed off a project over 1 month to re-architect a data team's
        infrastructure in GCP by leveraging Composer and Docker, to support
        local development and to deliver cost savings and reliability
        improvements. This led to dramatic speedups in our development iteration
        cycles, which would take at least 5 minutes previously. They were now a
        minute at most. This is the project I have continued as a graduate
        engineer.
        <br />
        Most importantly, I got to meet some incredible engineers who were
        driven by both innovation and product improvement. I was inspired by the
        work done at nine to balance the needs of the business to the needs of
        the engineers. I saw how to effectively communicate with people from
        diverse fields.
      </p>
    ),
    photo: "resmed",
  },
];

const MyExperiences = () => {
  const images = useStaticQuery(graphql`
    query {
      aws: file(relativePath: { eq: "aws.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      nine: file(relativePath: { eq: "nine.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      unsw: file(relativePath: { eq: "unsw.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      resmed: file(relativePath: { eq: "resmed.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
    }
  `);
  return (
    <>
      <Heading>My Experiences</Heading>
      {EXPERIENCES.map(({ title, description, photo }) => (
        <Story
          title={title}
          description={description}
          photo={
            <GatsbyImage
              image={getImage(images[photo])!}
              alt={photo + " work badge"}
            />
          }
        />
      ))}
    </>
  );
};

export default MyExperiences;
