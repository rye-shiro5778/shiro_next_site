import { Text } from "@/components/atoms/Typography";

export const Footer: React.VFC = () => {
  return (
    <footer className="mx-8 mt-8 mb-2 flex flex-col items-center sm:flex-row sm:justify-between">
      <div className=""></div>
      <div>
        <Text type="text" className="text-gray-500">
          © Copyright 2022 White. All Rights Reserved.
        </Text>
      </div>
    </footer>
  );
};
