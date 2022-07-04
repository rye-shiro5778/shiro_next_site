/* eslint-disable @next/next/no-page-custom-font */
import NextHead from "next/head";
type Props = {
  title?: string;
  description?: string;
  path?: string;
  imgUrl?: string;
  imgWidth?: number;
  imgHeight?: number;
};

export const Head: React.VFC<Props> = ({
  title = "White Personal Site",
  description = "Whiteのデジタルアートやテックブログを掲載した個人サイトです。",
  path = "/",
  imgUrl = "/top_ogp.png",
  imgWidth = 1280,
  imgHeight = 640,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta property="og:url" content={path} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="canonical" href={path} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Homenaje&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
};
