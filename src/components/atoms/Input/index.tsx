import { forwardRef } from "react";

type InputProps = JSX.IntrinsicElements["input"];
type Props = {
  label?: string | JSX.Element;
  hasError?: boolean;
  requiredLabel?: boolean;
} & InputProps;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, hasError, required, ...inputProps }: Props, ref) => {
    return (
      <div>
        {label && (
          <label htmlFor={String(label)}>
            <span className="text-gray-300">{label}</span>
            {required && <span className="text-red-400 pl-1 align-top">*</span>}
          </label>
        )}
        <input
          ref={ref}
          type="text"
          className={
            "block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring " +
            (hasError
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-600 focus:ring-blue-300 focus:border-blue-300")
          }
          {...inputProps}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
