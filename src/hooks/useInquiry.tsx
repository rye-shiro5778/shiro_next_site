import { useGlobal } from "@/context/GlobalProvider";
import axios from "axios";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { SubmitHandler, useForm } from "react-hook-form";

export function useInquiry<Inputs>() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    ui: {
      toastState: { setToast },
    },
  } = useGlobal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    reValidateMode: "onChange",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const getRecaptchaToken = async () => {
    if (!executeRecaptcha) {
      return null;
    }

    return await executeRecaptcha("inquiry");
  };

  const submitHandler: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const token = await getRecaptchaToken();
      await axios.post("/api/inquiry", { token, ...data });
      reset();
      const successToast = {
        title: "Sucess",
        content: "お問い合わせありがとうございます。",
        isShow: true,
        type: "success",
      } as const;
      setToast(successToast);
      setTimeout(() => setToast({ ...successToast, isShow: false }), 3000);
    } catch (e) {
      const errorToast = {
        title: "Error",
        content: "なんらかのエラーが発生しました。",
        isShow: true,
        type: "error",
      } as const;
      setToast(errorToast);
      setTimeout(() => setToast({ ...errorToast, isShow: false }), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(submitHandler);

  return { isLoading, errors, register, onSubmit };
}
