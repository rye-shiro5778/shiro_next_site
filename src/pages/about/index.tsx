import type { NextPage, NextPageWithLayout } from "next";
import Layout from "components/templates/Layouts/default";

const About: NextPageWithLayout = () => {
  return <div className="container mx-auto">About</div>;
};

About.getLayout = (page) => <Layout>{page}</Layout>;
export default About;
