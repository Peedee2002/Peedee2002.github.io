import React from "react";
import { Heading } from "@chakra-ui/react";
import Story from "./Story";
import { getExperiences } from "@/lib/content-loader";
import { MDXRemote } from "next-mdx-remote/rsc";

const MyExperiences = async () => {
  const experiences = await getExperiences();
  return (
    <div>
      <Heading size="4xl" key="heading">
        My Experiences!
      </Heading>
      {experiences.map((exp) => (
        <Story
          key={exp.frontmatter.title}
          frontmatter={exp.frontmatter}
          company={exp.company}
          mdx={<MDXRemote source={exp.content} />}
        />
      ))}
    </div>
  );
};

export default MyExperiences;
