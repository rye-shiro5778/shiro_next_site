import { Navbar } from "@/components/templates/Layouts/Header";
import { Footer } from "./Footer";

type Props = {
  children: JSX.Element;
  isHeaderOverlay?: boolean;
  isFooterOverlay?: boolean;
};

export default function Layout({
  children,
  isHeaderOverlay,
  isFooterOverlay,
}: Props) {
  return (
    <>
      <div
        className={
          isHeaderOverlay ? "absolute top-0 left-0 w-[100%] z-[100]" : "pt-2"
        }
      >
        <div className={isHeaderOverlay ? "mt-2" : ""}>
          <Navbar />
        </div>
      </div>
      {children}
      <div
        className={
          isFooterOverlay ? "absolute  bottom-4 right-4 w-[100%]" : "pt-2"
        }
      >
        <Footer />
      </div>
    </>
  );
}
