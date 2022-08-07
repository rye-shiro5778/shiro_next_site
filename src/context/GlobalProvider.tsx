import { useWindowSize } from "@/hooks/useWindowSize";
import { useRouter } from "next/router";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Toast = {
  title: string;
  content: string;
  type: "success" | "error";
  isShow: boolean;
} | null;

type GlobalState = {
  ui: {
    window: {
      width: number;
      height: number;
    };
    header: {
      isOpen: boolean;
      swichOpen: () => void;
    };
    toastState: {
      toast: Toast;
      setToast: (toast: Toast) => void;
    };
  };
};

const initValue: GlobalState = {
  ui: {
    window: {
      height: 1024,
      width: 900,
    },
    header: {
      isOpen: false,
      swichOpen: () => {},
    },
    toastState: {
      toast: null,
      setToast: () => {},
    },
  },
};

const GlobalContext = createContext<GlobalState>(initValue);
export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const { width, height } = useWindowSize();
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  useEffect(() => {
    setIsOpenHeader(false);
  }, [width]);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => setIsOpenHeader(false));

    return () => {
      router.events.off("routeChangeComplete", () => setIsOpenHeader(false));
    };
  }, [router]);

  const globalState: GlobalState = useMemo(() => {
    return {
      ui: {
        window: { width, height },
        header: {
          isOpen: isOpenHeader,
          swichOpen: () => setIsOpenHeader(!isOpenHeader),
        },
        toastState: {
          toast,
          setToast,
        },
      },
    };
  }, [height, isOpenHeader, toast, width]);

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};
