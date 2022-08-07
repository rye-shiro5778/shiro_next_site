import { Blog as BlogType, MicroCMSDate } from "@/utils/types/blogs";
import dayjs from "dayjs";
import React, { memo } from "react";
import { Content } from "../Blog/Content";
import { Head } from "../Blog/Head";
import { MetaInfo } from "../Blog/MetaInfo";
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
