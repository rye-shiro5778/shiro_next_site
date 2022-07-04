import React, { memo } from "react";
import styles from "./content.module.scss";
type Props = {
  content: string;
};
export const Content: React.VFC<Props> = memo(({ content }: Props) => {
  return (
    <div className={styles.content}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
});

Content.displayName = "Content";
