import { Heading } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p style={{ paddingBottom: "0.5rem" }}>{children}</p>,
    h1: ({ children }) => <Heading size="3xl">{children}</Heading>,
    h4: ({ children }) => <Heading size="md">{children}</Heading>,
    h3: ({ children }) => (
      <h3
        style={{
          paddingTop: "5px",
          fontSize: "var(--chakra-fontSizes-lg)",
        }}
      >
        {children}
      </h3>
    ),

    h2: ({ children }) => (
      <h2 style={{ fontSize: "larger", paddingTop: "1.5rem" }}>{children}</h2>
    ),

    "a:link": () => <a style={{ color: "#0000ee" }} />,

    "a:visited": () => <a style={{ color: "#8400ff" }} />,

    "a:link:active": () => <a style={{ color: "#ff0000" }} />,

    "a:visited:active": () => <a style={{ color: "#ff0000" }} />,

    ul: ({ children }) => <ul style={{ paddingLeft: "2rem" }}>{children}</ul>,

    ol: ({ children }) => <ul style={{ paddingLeft: "2rem" }}>{children}</ul>,

    ...components,
  };
}
