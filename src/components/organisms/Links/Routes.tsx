import { Button } from "@/components/atoms/Button";
import { routes } from "@/constant";
import { memo } from "react";

export const Routes: React.VFC = memo(() => {
  return (
    <div className="flex flex-col capitalize text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
      {routes.map(({ label, href, disableNav }) => {
        if (disableNav) return;
        return (
          <Button
            btnType="link"
            href={href}
            className="mt-3 mr-6 lg:mt-0"
            key={label}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
});

Routes.displayName = "Routes";
