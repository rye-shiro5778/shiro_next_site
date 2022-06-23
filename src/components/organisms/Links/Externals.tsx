import { Link } from "@/components/atoms/Link";
import { links } from "@/utils/constants/constant";
import { memo } from "react";

export const Externals: React.VFC = memo(() => {
  return (
    <div className="flex justify-center mt-6 px-3 lg:flex lg:mt-0 lg:-mx-2">
      {links.map(({ label, href, icon }) => (
        <Link
          key={label}
          type="link"
          href={href}
          aria-label={label}
          className="mx-4 text-xl"
          target={"_blank"}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
});

Externals.displayName = "Extarnals";
