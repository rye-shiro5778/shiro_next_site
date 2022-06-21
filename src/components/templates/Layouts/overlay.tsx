import { Navbar } from "components/templates/Header";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <div className={`absolute top-0 left-0 w-[100%] z-[100] mt-1`}>
        <Navbar />
      </div>
      {children}
    </>
  );
}
