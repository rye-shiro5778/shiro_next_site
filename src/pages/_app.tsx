import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import type { AppPropsWithLayout } from "next/app";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { GoogleAnalyticsHead } = useGoogleAnalytics();

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <GoogleAnalyticsHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
