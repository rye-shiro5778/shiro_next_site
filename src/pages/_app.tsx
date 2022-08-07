import { GlobalProvider } from "@/context/GlobalProvider";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import type { AppPropsWithLayout } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { GoogleAnalyticsHead } = useGoogleAnalytics();
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY || "";

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <GlobalProvider>
      {getLayout(
        <GoogleReCaptchaProvider language="ja" reCaptchaKey={reCaptchaKey}>
          <GoogleAnalyticsHead />
          <Component {...pageProps} />
        </GoogleReCaptchaProvider>
      )}
    </GlobalProvider>
  );
}

export default MyApp;
