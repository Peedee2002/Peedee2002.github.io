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
        various differing applications and tech stacks.
        <br />
        I also started and handed off a project over 1 month to re-architect a
        data team's infrastructure in GCP by leveraging Composer and Docker, to
        support local development and to deliver cost savings and reliability
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
        I designed, defended and implemented a system architecture over 6 months
        to analyse a given team's on-call alerts. This service was infinitely
        extensible for its clients - as they were able to create simple
        serverless functions to enrich the data injested by my service.
        <br /> This data would then feed a dashboard, which comes with automatic
        insights and data-driven suggestions. This saved at least 2 hours weekly
        of manual data processing by senior engineers in every team that
        onboards onto it. I owned the CI/CD, testing, monitoring, and validation
        of this cloud-based application.
        <br />I also got a taste of working on Aurora Platform. I developed a
        small piece of infrastructure required for IPv6. This work aided
        multiple services running under the Aurora brand, such as Aurora
        Postgres and Aurora Serverless.
        <br /> I got to experience what it is like to be on a highly mature team
        full of talent - albiet often competing talent. I learned about how to
        ensure large-scale programs continue to be functional, healthy, and easy
        to maintain. I learned these best practices and am delighted to carry
        them forward throughout my career.
      </p>
    ),
    photo: "aws",
  },
  {
    title: "UNSW",
    description: (
      <p>
        Here, I led classes of 25 students twice a week. I guided students
        through COMP1531. This is a groupwork course, targeting skills such as
        communication and familiarity with software engineering tools such as
        git and JavaScript. Ran 1 hour tutoring sessions to cover core concepts
        and answer questions on software engineering development.
        <br />
        I also had the privelage to write course exams sat by 700 students, and
        managed student queries regarding it over a 24 hour exam block.
        <br />
        I also taught COMP6991, a course covering Rust and language design
        generally.
        <br />
        This experience was by far the most impactful on me. It taught me how to
        interact with large groups of different people, manage conflict, foster
        cohesion, and express complex requirements that are suited to the
        experience of different students.
      </p>
    ),
    photo: "unsw",
  },
  {
    title: "ResMed Corp",
    description: (
      <p>
        I developed product features using a Java micro-service back-end and
        Angular.js front-end with review and testing. I also developed an
        internal tool written in React and Express for observing environment
        health and status. <br />I saved hours of manual testing time, and saved
        hours of outage diagnosis time during incidents involving the team. I
        also managed back-end, front-end, and deployment of this full stack
        application to AWS. I also refactored large Java projects for more
        efficient deployments to better leverage server-less tools on AWS.
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
