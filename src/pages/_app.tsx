import type { AppPropsWithLayout } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    const handleRouteChange = (url: string) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, GA_TRACKING_ID]);

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script id="ga" defer strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${GA_TRACKING_ID}');
          `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
