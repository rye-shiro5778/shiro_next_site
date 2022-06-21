import { Navbar } from "components/templates/Header";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <div className="mt-2">
        <Navbar />
      </div>
      {children}
    </>
  );
}
