import React from "react";
import { Heading } from "@chakra-ui/react";
import Story from "./Story";
import { getData } from "@/util/getData";

const MyExperiences = async () => {
  const data = await getData("experiences", true);
  return (
    <div>
      <Heading size="4xl" key="heading">
        My Experiences!
      </Heading>
      {data.map((e) => (
        <Story
          key={e.module.frontmatter.title}
          frontmatter={e.module.frontmatter}
          company={e.filename.substring(0, e.filename.length - 4)}
          mdx={e.module.default({})}
        />
      ))}
    </div>
  );
};

export default MyExperiences;
