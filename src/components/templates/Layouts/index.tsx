import { Navbar } from "@/components/templates/Header";
import { Footer } from "../Footer";

type Props = {
  children: JSX.Element;
  isStack?: boolean;
};

export default function Layout({ children, isStack }: Props) {
  return (
    <>
      <div
        className={
          isStack ? "absolute top-0 left-0 w-[100%] z-[100] mt-1" : "mt-2"
        }
      >
        <Navbar />
      </div>
      {children}
      <div className={isStack ? "absolute  bottom-4 right-4 w-[100%]" : "mt-2"}>
        <Footer />
      </div>
    </>
  );
}
