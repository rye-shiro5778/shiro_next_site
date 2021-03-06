import { Button } from "@/components/atoms/Button";
import { links } from "@/constant";
import { memo } from "react";

export const Externals: React.VFC = memo(() => {
  return (
    <div className="flex justify-center mt-6 lg:flex lg:mt-0">
      {links.map(({ label, href, icon }) => (
        <Button
          key={label}
          btnType="link"
          href={href}
          aria-label={label}
          className="mx-2"
          size="lg"
          target={"_blank"}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
});

Externals.displayName = "Extarnals";
