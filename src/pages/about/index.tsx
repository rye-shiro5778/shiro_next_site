import { Title } from "@/components/atoms/Typography/Title";
import { Externals } from "@/components/organisms/Links/Externals";
import Layout from "@/components/templates/Layouts";
import type { NextPageWithLayout } from "next";

const About: NextPageWithLayout = () => {
  return (
    <section className="container mx-auto bg-white dark:bg-gray-800">
      <div className="px-6 py-8 mx-10">
        <div className="items-center lg:flex">
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
              {/* <a
                className="font-bold text-blue-600 dark:text-blue-400"
                href="#"
              >
                @BakaTeam
              </a>
              , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem
              sequi ex veniam consequuntur id, maiores beatae ipsa omnis
              aliquam? */}
            </p>

            <div className="flex items-center mt-1 mb-6 lg:my-6 -mx-2">
              <Externals />
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg mx-10">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-xl shadow"
                  src="/profile.png"
                  width={256}
                  height={256}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;
export default About;
