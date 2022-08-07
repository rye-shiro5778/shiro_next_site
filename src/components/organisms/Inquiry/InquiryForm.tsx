import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Input/Textarea";
import { errorMsg } from "@/components/atoms/Typography/ErrorMsg";
import { useInquiry } from "@/hooks/useInquiry";
import { ErrorMessage } from "@hookform/error-message";
import { InquiryToast } from "./InquiryToast";
type Inputs = {
  name: string;
  email: string;
  content: string;
};

export const InquiryForm = () => {
  const { isLoading, errors, register, onSubmit } = useInquiry<Inputs>();

  return (
    <>
      <InquiryToast />
      <form onSubmit={onSubmit}>
        <div className="my-4">
          <Input
            label={"お名前"}
            {...register("name", {
              required: "必須項目です",
              maxLength: {
                value: 30,
                message: "30文字以下で入力する必要があります",
              },
            })}
            hasError={!!errors.name?.type}
            required
          />
          <ErrorMessage errors={errors} name="name" render={errorMsg} />
        </div>
        <div className="my-4">
          <Input
            type="text"
            label={"メールアドレス"}
            {...register("email", {
              required: "必須項目です",
              pattern: {
                value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                message: "入力形式がメールアドレスではありません",
              },
              maxLength: {
                value: 70,
                message: "70文字以下で入力する必要があります",
              },
            })}
            hasError={!!errors?.email?.type}
            required
          />
          <ErrorMessage errors={errors} name="email" render={errorMsg} />
        </div>
        <div className="my-4">
          <Textarea
            label={"お問い合わせ内容"}
            {...register("content", {
              required: "必須項目です",
              maxLength: 300,
            })}
            hasError={!!errors?.content?.type}
            required
          />
          <ErrorMessage errors={errors} name="content" render={errorMsg} />
        </div>
        <div className="mt-8 mx-4">
          <Button
            type="submit"
            size={"base"}
            disabled={isLoading}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
