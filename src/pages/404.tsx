import { Text } from "@/components/atoms/Typography";
import Layout from "@/components/templates/Layouts";
import type { NextPageWithLayout } from "next";

const ErrorPage: NextPageWithLayout = () => {
  return <Text type="text">404</Text>;
};

ErrorPage.getLayout = (page) => <Layout>{page}</Layout>;
export default ErrorPage;
