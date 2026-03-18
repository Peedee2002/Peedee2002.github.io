import React from "react";
import { getProjectPosts } from "@/lib/content-loader";
import { PostList } from "@/components/PostList";

const ProjectsPage = async () => {
  const posts = await getProjectPosts();
  return (
    <PostList posts={posts} heading="My Projects!" slugPrefix="projects" />
  );
};

export default ProjectsPage;

export const metadata = {
  title: "Peter's Projects!",
};
