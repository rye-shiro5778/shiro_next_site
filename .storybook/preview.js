import "../src/styles/globals.scss";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value: "#1e293b",
      },
    ],
  },
};

export const globalTypes = {
  darkMode: true,
};
// import * as NextImage from "next/image";

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) => (
//     <OriginalNextImage {...props} placeholder={undefined} unoptimized />
//   ),
// });
