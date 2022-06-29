import dayjs from "dayjs";
import { memo } from "react";

type Props = {
  path?: string;
  cmd?: string;
  content?: string | JSX.Element;
};
export const Terminal: React.VFC<Props> = memo(
  ({
    path = "~/",
    cmd = "curl http://localhost:3000",
    content = "Not found Content",
  }) => {
    const now = dayjs().format("ddd MMM DD HH:mm:ss");

    return (
      <div className="w-full h-full">
        <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
          <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black">
            <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"></div>
            <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
            <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
            <div className="mx-auto pr-16">
              <p className="text-center text-sm mx-3">White Terminal</p>
            </div>
          </div>
          <div className="pl-1 pt-1 h-auto  text-white font-mono text-xs bg-black">
            <p className="pb-1 text-base">Last login: {now}</p>
            <p className="pb-1 text-base">
              White {path} $ {cmd}
            </p>
            <p className="pb-1 text-2xl">{content}</p>
          </div>
        </div>
      </div>
    );
  }
);

Terminal.displayName = "Terminal";
