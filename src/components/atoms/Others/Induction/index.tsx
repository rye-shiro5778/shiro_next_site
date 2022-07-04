import { memo } from "react";

export const Induction: React.VFC = memo(() => {
  return (
    <div className="w-6 h-[10vh] mx-4 opacity-90 overflow-hidden relative duration-1000 transition-opacity">
      <div className="w-[1px] h-full absolute top-0 left-0 bg-white animate-[bounce100_1s_ease-out_infinite] duration-700 delay-300"></div>
      <div className="w-[1px] h-full absolute top-0 left-[50%] bg-white animate-[bounce100_1s_linear_infinite] duration-700 delay-500"></div>
      <div className="w-[1px] h-full absolute top-0 right-0 bg-white animate-[bounce100_1s_ease-in_infinite] "></div>
    </div>
  );
});

Induction.displayName = "Induction";
