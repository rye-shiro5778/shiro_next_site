import { Blog as BlogType, MicroCMSDate } from "@/cms/utils/type";
import dayjs from "dayjs";
import React, { memo } from "react";
import { Content } from "../../atoms/Blog/Content";
import { Head } from "../../organisms/Blog/Head";
import { MetaInfo } from "../../organisms/Blog/MetaInfo";
type Props = { blog: BlogType & MicroCMSDate };

export const Article: React.VFC<Props> = memo(({ blog }: Props) => {
  const { title, description, publishedAt, tags, content, category } = blog;
  const publishedDate = dayjs(publishedAt).format("YYYY-MM-DD");

  return (
    <article>
      <Head description={description || ""} />
      <MetaInfo
        title={title}
        publishedDate={publishedDate}
        category={category}
        tags={tags}
      />
      <Content content={content} />
    </article>
  );
});

Article.displayName = "Blog";
