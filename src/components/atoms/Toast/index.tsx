import { memo } from "react";
import { AiFillCheckCircle, AiFillThunderbolt } from "react-icons/ai";
import { Text } from "../Typography/Text";

type Props = {
  title: string;
  content: string;
  type: "success" | "error";
  isShow: boolean;
};

export const Toast: React.VFC<Props> = memo(
  ({ title, content, type, isShow }) => {
    const typeStyle = {
      bgColor: type === "success" ? "bg-emerald-400" : "bg-red-400",
      textColor: type === "success" ? "text-emerald-500" : "text-red-400",
    };

    const Icon =
      type === "success" ? <AiFillCheckCircle /> : <AiFillThunderbolt />;

    const slideClass = isShow
      ? "animate-[slideIn_1s_linear_forwards]"
      : "animate-[slideOut_1s_linear_forwards]";

    return (
      <div
        className={`flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-md shadow-sm  ${slideClass}`}
      >
        <div
          className={`flex items-center justify-center w-12 text-lg text-white ${typeStyle.bgColor}`}
        >
          {Icon}
        </div>

        <div className="pr-2 py-2">
          <div className="mx-3 min-w-[100px]">
            <Text size="base" className={typeStyle.textColor}>
              {title}
            </Text>
            <p className="text-sm text-gray-500">{content}</p>
          </div>
        </div>
      </div>
    );
  }
);

Toast.displayName = "Toast";
