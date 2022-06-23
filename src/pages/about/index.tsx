import Layout from "@/components/templates/Layouts";
import type { NextPageWithLayout } from "next";

const About: NextPageWithLayout = () => {
  return <div className="container mx-auto">About</div>;
};

About.getLayout = (page) => <Layout>{page}</Layout>;
export default About;
