import { Heading } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p style={{ paddingBottom: "0.5rem" }}>{children}</p>,
    h1: ({ children }) => <Heading size="3xl">{children}</Heading>,
    h3: ({ children }) => <Heading size="lg">{children}</Heading>,
    h4: ({ children }) => <Heading size="md">{children}</Heading>,
    ...components,
  };
}
