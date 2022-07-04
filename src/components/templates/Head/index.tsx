import NextHead from "next/head";

type Props = {
  title?: string;
  description?: string;
  path?: string;
  imgUrl?: string;
  imgWidth?: string;
  imgHeight?: string;
};

export const Head: React.VFC<Props> = ({
  title,
  description,
  path,
  imgUrl,
  imgWidth,
  imgHeight,
}) => {
  const headTitle = title && "White Personal Site";
  const headDescription =
    description &&
    "Whiteのデジタルアートやテックブログを掲載した個人サイトです。";
  const headPath = path && "/";
  const headImgUrl = imgUrl && "/top_ogp.png";
  const ogImageWidth = String(imgWidth && 1280);
  const ogImageHeight = String(imgHeight && 640);

  return (
    <NextHead>
      <title>{headTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={headDescription} />
      <meta property="og:url" content={headPath} />
      <meta property="og:title" content={headTitle} />
      <meta property="og:site_name" content={headTitle} />
      <meta property="og:description" content={headDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={headImgUrl} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <link rel="canonical" href={headPath} />
    </NextHead>
  );
};
