import { Button } from "@/components/atoms/Button";
import { Externals } from "@/components/organisms/Links/Externals";
import { Routes } from "@/components/organisms/Links/Routes";
import { useGlobal } from "@/context/GlobalProvider";
import { FaHamburger } from "react-icons/fa";

export const Navbar: React.VFC = () => {
  const {
    ui: {
      header: { isOpen, swichOpen },
      window: { width },
    },
  } = useGlobal();

  return (
    <nav
      className={
        isOpen ? "bg-gray-800 opacity-80 z-[300] top-0 left-0 w-full" : ""
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
              <picture>
                <source
                  srcSet="/logo.png"
                  type="image/webp"
                  height={16.5}
                  width={145}
                />

                <img src={"/logo.png"} alt={"logo"} height={16.5} width={145} />
              </picture>
            </Button>
            <div className="flex lg:hidden">
              <Button
                aria-label="toggle menu"
                btnType="text"
                onClick={swichOpen}
              >
                <FaHamburger />
              </Button>
            </div>
          </div>
          {(isOpen || width > 1024) && <Routes />}
        </div>

        {(isOpen || width > 1024) && <Externals />}
      </div>
    </nav>
  );
};
