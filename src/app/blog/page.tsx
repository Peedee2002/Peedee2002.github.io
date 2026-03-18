import React from "react";
import { getBlogPosts } from "@/lib/content-loader";
import { PostList } from "@/components/PostList";
import { Metadata } from "next";

const BlogPage = async () => {
  const posts = await getBlogPosts();
  return <PostList posts={posts} heading="My Blog!" slugPrefix="blog" />;
};

export default BlogPage;

export const metadata: Metadata = {
  title: "Peter's Blog!",
};
