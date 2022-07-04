import { Button } from "@/components/atoms/Button";
import { Externals } from "@/components/organisms/Links/Externals";
import { Routes } from "@/components/organisms/Links/Routes";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useCallback, useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";

export const Navbar: React.VFC = () => {
  const { width } = useWindowSize();
  const [isHide, setIsHide] = useState(true);
  const onClick = useCallback(() => setIsHide(!isHide), [isHide, setIsHide]);

  useEffect(() => setIsHide(true), [width]);

  return (
    <nav
      className={
        !isHide ? "bg-gray-800 opacity-80 z-[300] top-0 left-0 w-full" : ""
      }
    >
      <div className="container px-3 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="lg:flex lg:items-center">
          <div className="flex  justify-between items-center">
            <Button
              btnType="link"
              href="/"
              className="text-white font-bold  hover:text-gray-300 mt-1"
            >
              <img src={"/logo.png"} alt={"logo"} height={16.5} width={145} />
            </Button>
            <div className="flex lg:hidden">
              <Button aria-label="toggle menu" btnType="text" onClick={onClick}>
                <FaHamburger />
              </Button>
            </div>
          </div>
          {(!isHide || width > 1024) && <Routes />}
        </div>

        {(!isHide || width > 1024) && <Externals />}
      </div>
    </nav>
  );
};
