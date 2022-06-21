import { memo } from "react";
import { Text } from "components/atoms/Text";
import { links, routes } from "utils/constants/constant";

export const Externals: React.VFC = memo(() => {
  return (
    <div className="flex justify-center mt-6 px-3 lg:flex lg:mt-0 lg:-mx-2">
      {links.map(({ label, href, icon }) => (
        <Text
          key={label}
          type="link"
          href={href}
          aria-label={label}
          className="mx-4 text-xl text-white"
          target={"_blank"}
        >
          {icon}
        </Text>
      ))}
    </div>
  );
});

Externals.displayName = "Extarnals";
