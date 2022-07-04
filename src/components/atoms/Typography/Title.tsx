import { Props, TitleType } from "./type";

export const Title: React.VFC<Omit<Props<TitleType>, "size">> = ({
  children,
  level = 1,
  className,
  ...hProps
}) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={`text-white text-3xl lg:text-4xl ${className}`}
          {...hProps}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={`text-white text-2xl lg:text-3xl ${className}`}
          {...hProps}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={`text-white text-xl  lg:text-2xl ${className}`}
          {...hProps}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`text-white text-lg ${className}`} {...hProps}>
          {children}
        </h4>
      );
    default:
      return <></>;
  }
};
