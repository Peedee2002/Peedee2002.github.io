import { createDynamicPostPage } from "@/lib/mdx-utils";

const { generateStaticParams, generateMetadata, Page } = createDynamicPostPage("projects");

export { generateStaticParams, generateMetadata };
export default Page;
