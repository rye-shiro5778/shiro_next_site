import Layout from "components/templates/Layouts/default";
import type { NextPageWithLayout } from "next";

const Blog: NextPageWithLayout = () => {
  return <div className="container mx-auto">About</div>;
};

Blog.getLayout = (page) => <Layout>{page}</Layout>;
export default Blog;
