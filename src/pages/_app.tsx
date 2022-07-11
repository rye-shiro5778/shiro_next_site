import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import type { AppPropsWithLayout } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
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
