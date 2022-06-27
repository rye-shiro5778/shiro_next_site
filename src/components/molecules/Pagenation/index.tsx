import { Button } from "@/components/atoms/Button";

export const Pagination = ({
  perPage = 1,
  totalCount,
  pageRoot,
}: {
  perPage?: number;
  totalCount: number;
  pageRoot: string;
}) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="flex text-center mt-6 justify-center">
      {range(1, Math.ceil(totalCount / perPage)).map((number, index, page) => {
        // if (page.length > 5 && index < page.length - 2 && index > 1) {
        //   return <span>...</span>;
        // }
        return (
          <li key={index} className="mx-1">
            <Button
              btnType="link"
              href={pageRoot + number}
              className={"bg-gray-700 p-3"}
            >
              {String(number)}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
