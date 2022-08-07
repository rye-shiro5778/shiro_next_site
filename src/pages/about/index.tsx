import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Typography/Text";
import { Title } from "@/components/atoms/Typography/Title";
import { Head } from "@/components/organisms/Head";
import { InquiryForm } from "@/components/organisms/Inquiry/InquiryForm";
import { Externals } from "@/components/organisms/Links/Externals";
import Layout from "@/components/templates/Layouts";
import type { NextPageWithLayout } from "next";

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head />
      <div className="container mx-auto bg-white dark:bg-gray-800">
        <div className="px-6 py-8 mx-4 md:mx-6 lg:mx-10">
          <section className="items-center lg:flex">
            <div className="lg:w-1/2">
              <Title level={2}>Who am I</Title>

              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-xl">
                新卒２年目の自社開発企業のフロントエンドエンジニア。
                <br />
                バックエンドも少し触ります。
                <br />
                <br />
                こちらのサイトは、React(Next.js) + TypeScript + tailwindcss
                を使用して開発しています。{" "}
              </p>

              <div className="flex items-center mt-1 mb-6 lg:my-6 -mx-2">
                <Externals />
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-xl  md:mx-6 lg:mx-8 xl:mx-10">
                  <picture>
                    <source
                      srcSet="/profile.webp"
                      type="image/webp"
                      className="object-cover object-center w-full h-64 rounded-xl shadow"
                    />
                    <img
                      src="/profile.png"
                      alt="profile"
                      width={256}
                      height={256}
                      className="object-cover object-center w-full h-64 rounded-xl shadow"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <Title level={2}>Inquiry</Title>
            <InquiryForm />
            <div className="mt-4">
              <Text type="text" className="text-gray-200">
                ※
              </Text>
              <Text type="text" size="sm" className="text-gray-300 mx-2">
                This site is protected by reCAPTCHA and the Google
              </Text>
              <Link
                href="https://policies.google.com/privacy"
                className="text-blue-400"
              >
                Privacy Policy
              </Link>
              <Text className="text-gray-300 mx-2" size="sm">
                and
              </Text>
              <Link
                href="https://policies.google.com/terms"
                className="text-blue-400"
              >
                Terms of Service
              </Link>
              <Text className="text-gray-300 mx-2" size="sm">
                apply.
              </Text>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;
export default About;
