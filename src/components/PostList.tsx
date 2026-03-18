"use client";

import React from "react";
import styles from "styles/Projects.module.scss";
import { Box, Heading } from "@chakra-ui/react";
import PageCard from "./PageCard";
import type { Post } from "@/lib/content-loader";

interface PostListProps {
  posts: Post[];
  heading: string;
  slugPrefix: "blog" | "projects";
}

export function PostList({ posts, heading, slugPrefix }: PostListProps) {
  return (
    <>
      <Heading size="4xl">{heading}</Heading>
      <Box className={styles.projectStyles}>
        {posts
          .filter((post) => !post.draft)
          .map((post) => (
            <PageCard
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={`${slugPrefix}/${post.slug}`}
              abstract={post.abstract}
              frontImage={post.featuredImage || ""}
            />
          ))}
      </Box>
    </>
  );
}
