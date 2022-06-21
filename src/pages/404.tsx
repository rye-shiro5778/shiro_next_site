import type { NextPage, NextPageWithLayout } from "next";
import { Text } from "components/atoms/Text";
import Layout from "components/templates/Layouts/default";

const ErrorPage: NextPageWithLayout = () => {
  return <Text type="text">404</Text>;
};

ErrorPage.getLayout = (page) => <Layout>{page}</Layout>;
export default ErrorPage;
