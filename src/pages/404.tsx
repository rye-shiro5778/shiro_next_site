import { Button } from "@/components/atoms/Button";
import { Terminal } from "@/components/atoms/Others/Terminal";
import Layout from "@/components/templates/Layouts";
import type { NextPageWithLayout } from "next";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="container mx-auto my-10 h-[80vh]">
      <Terminal
        cmd={"curl http://localhost:3000" + pathname}
        content={
          <div className="mt-3 ml-3">
            <p>404 Not Found</p>
            <div className="flex items-center">
              <p>Please Back 　　</p>
              <Button
                btnType="link"
                size="3xl"
                href="/"
                className="border-b-2 border-sky-300 text-sky-300"
              >
                this link
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;
export default Page;
