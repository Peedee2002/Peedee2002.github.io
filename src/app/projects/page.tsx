import React from "react";
import { getProjectPosts } from "@/lib/content-loader";
import { PostList } from "@/components/PostList";
import { Metadata } from "next";

const ProjectsPage = async () => {
  const posts = await getProjectPosts();
  return (
    <PostList posts={posts} heading="My Projects!" slugPrefix="projects" />
  );
};

export default ProjectsPage;

export const metadata: Metadata = {
  title: "Peter's Projects!",
};
