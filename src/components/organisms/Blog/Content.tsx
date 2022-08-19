import styles from "@/styles/content.module.scss";
import React, { memo } from "react";
type Props = {
  content: string;
};

type Preview = Promise<
  | {
      url: string;
      mediaType: string;
      contentType: string;
      favicons: string[];
    }
  | {
      url: string;
      title: string;
      siteName: string | undefined;
      description: string | undefined;
      mediaType: string;
      contentType: string | undefined;
      images: string[];
      videos: {
        url: string | undefined;
        secureUrl: string | null | undefined;
        type: string | null | undefined;
        width: string | undefined;
        height: string | undefined;
      }[];
      favicons: string[];
    }
>;

export const Content: React.VFC<Props> = memo(({ content }: Props) => {
  return (
    <div className={styles.content}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
});

Content.displayName = "Content";
