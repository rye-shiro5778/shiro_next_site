import { Button } from "@/components/atoms/Button";
import { makeRange } from "@/utils/makeRange";
import React from "react";

type Props = {
  perPage?: number;
  totalCount: number;
  pageRoot: string;
};

export const Pagenation: React.VFC<Props> = ({
  perPage = 8,
  totalCount,
  pageRoot,
}: Props) => {
  const range: number[] = makeRange(1, Math.ceil(totalCount / perPage));

  return (
    <ul className="flex text-center mt-6 justify-center">
      {range.map((number, index) => {
        // if (page.length > 5 && index < page.length - 2 && index > 1) {
        //   return <span>...</span>;
        // }
        return (
          <li key={index} className="mx-1">
            <Button
              btnType="link"
              href={pageRoot + number}
              className={"bg-gray-700 hover:bg-gray-600 p-3"}
            >
              {String(number)}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
