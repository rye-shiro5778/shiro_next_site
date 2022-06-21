import { memo, useCallback, useState } from "react";
import { FaGithub, FaHamburger } from "react-icons/fa";
import { Button } from "components/atoms/Button";
import { Text } from "components/atoms/Text";
import { useWindowSize } from "hooks/useWindowSize";
import { links, routes } from "utils/constants/constant";

export const Routes: React.VFC = memo(() => {
  return (
    <div className="flex flex-col capitalize text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
      {routes.map(({ label, href, disableNav }) => {
        if (disableNav) return;
        return (
          <Text
            type="link"
            href={href}
            className="mt-3 mx-3 lg:mt-0 lg:mx-4"
            key={label}
          >
            {label}
          </Text>
        );
      })}
    </div>
  );
});

Routes.displayName = "Routes";
