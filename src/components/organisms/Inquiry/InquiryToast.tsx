import { Toast } from "@/components/atoms/Toast";
import { useGlobal } from "@/context/GlobalProvider";

export const InquiryToast = () => {
  const {
    ui: {
      toastState: { toast },
    },
  } = useGlobal();

  if (!toast) {
    return null;
  }

  return (
    <div className="fixed left-0 right-0 top-10">
      <Toast
        title={toast.title}
        content={toast.content}
        type={toast.type}
        isShow={toast.isShow}
      />
    </div>
  );
};
