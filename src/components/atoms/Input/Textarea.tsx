import { forwardRef, useRef } from "react";

type InputProps = JSX.IntrinsicElements["textarea"];
type Props = {
  label?: string | JSX.Element;
  hasError?: boolean;
} & InputProps;

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, hasError, required, ...inputProps }: Props, ref) => {
    const dummyRef = useRef<HTMLDivElement>(null);
    return (
      <div>
        {label && (
          <label htmlFor={String(label)}>
            <span className="text-gray-300">{label}</span>
            {required && <span className="text-red-400 pl-1 align-top">*</span>}
          </label>
        )}
        <div className="relative">
          <div aria-hidden={true} ref={dummyRef} className="overflow-hidden " />
          <textarea
            ref={ref}
            id={String(label)}
            className={
              "block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring " +
              (hasError
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-600 focus:ring-blue-300 focus:border-blue-300")
            }
            {...inputProps}
          />
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Input";
