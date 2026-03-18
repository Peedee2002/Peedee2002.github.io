import { createDynamicPostPage } from "@/lib/mdx-utils";

const { generateStaticParams, generateMetadata, Page } =
  createDynamicPostPage("blog");

export { generateStaticParams, generateMetadata };
export default Page;
