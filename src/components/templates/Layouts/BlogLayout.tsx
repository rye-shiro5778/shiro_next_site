import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Typography/Text";
import { Title } from "@/components/atoms/Typography/Title";
import { TagGroup } from "@/components/molecules/TagGroup";
import categories from "@/constant/categories.json";
import tags from "@/constant/tags.json";
import { BiCategoryAlt } from "react-icons/bi";
import { BsTags } from "react-icons/bs";
import Layout from ".";
type Props = {
  children: JSX.Element;
  isHeaderOverlay?: boolean;
  isFooterOverlay?: boolean;
};

const _categories = categories as unknown as { slug: string; name: string }[];
const _tags = tags as unknown as { slug: string; name: string }[];

export default function BlogLayout({
  children,
  isHeaderOverlay,
  isFooterOverlay,
}: Props) {
  return (
    <Layout isFooterOverlay={isFooterOverlay} isHeaderOverlay={isHeaderOverlay}>
      <div className="container mx-auto gap-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4">
        <div
          className={`container mx-auto mt-4 col-span-2 sm:grid-cols-2 lg:col-span-3`}
        >
          {children}
        </div>
        <div className="container mx-auto mt-3 ml-4 sm:ml-1 col-span-1">
          <section className="max-w-md px-4 py-2 mx-auto mt-20 rounded-xl shadow-lg border border-white">
            <div className="flex justify-center -mt-14 md:justify-end">
              <img
                alt=""
                className="object-cover object-center w-[120px] h-[120px] rounded-xl"
                src="/profile.png"
                width={120}
                height={120}
              />
            </div>
            <div className="flex items-center -mt-4">
              <Title level={4} className="ml-2 ">
                About Me
              </Title>
            </div>
            <p className="mt-4 text-gray-200">
              新卒２年目の自社開発企業のフロントエンドエンジニア。バックエンドも少し触ります。
            </p>

            <div className="flex justify-end mt-3 mb-2">
              <Button
                btnType="link"
                href="/about"
                target="_blank"
                isOnlyText={false}
                size={"sm"}
              >
                Read Me
              </Button>
            </div>
          </section>
          <section className="max-w-md text-center px-4 py-2 mx-auto mt-5 rounded-xl shadow-lg border border-white">
            <div className="flex items-center justify-center">
              <BiCategoryAlt className="text-white mr-2" />
              <Title level={4}>Category</Title>
            </div>

            <div className="my-2 mx-2 flex items-center flex-wrap justify-center">
              {_categories.map(({ slug, name }) => (
                <div key={`sider-${slug}`}>
                  <Text
                    type="link"
                    href={`/blog/category/${slug}/page/1`}
                    className="px-2 py-1 hover:text-gray-400 font-bold"
                    size="sm"
                  >
                    {name}
                  </Text>
                </div>
              ))}
            </div>
          </section>
          <section className="max-w-md text-center px-4 py-2 mx-auto mt-5 rounded-xl shadow-lg border border-white">
            <div className="flex items-center justify-center mb-1">
              <BsTags className="text-white mr-2" />
              <Title level={4}>Tag</Title>
            </div>
            <div className="my-2">
              <TagGroup tags={_tags} isLink={true} />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
