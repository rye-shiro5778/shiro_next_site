import { Link } from "@/components/atoms/Link";
import { routes } from "@/utils/constants/constant";
import { memo } from "react";

export const Routes: React.VFC = memo(() => {
  return (
    <div className="flex flex-col capitalize text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
      {routes.map(({ label, href, disableNav }) => {
        if (disableNav) return;
        return (
          <Link
            type="link"
            href={href}
            className="mt-3 mx-3 lg:mt-0 lg:mx-4"
            key={label}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
});

Routes.displayName = "Routes";
