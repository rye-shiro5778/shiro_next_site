import { Button } from "@/components/atoms/Button";
import { Link } from "@/components/atoms/Link";
import { Externals } from "@/components/organisms/Links/Externals";
import { Routes } from "@/components/organisms/Links/Routes";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useCallback, useState } from "react";
import { FaHamburger } from "react-icons/fa";

export const Navbar: React.VFC = () => {
  const { width, height } = useWindowSize();
  const [isHide, setIsHide] = useState(true);
  const onClick = useCallback(() => setIsHide(!isHide), [isHide, setIsHide]);
  return (
    <nav>
      <div className="container px-3 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-bold lg:text-3xl hover:text-gray-300"
            >
              White
            </Link>
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
