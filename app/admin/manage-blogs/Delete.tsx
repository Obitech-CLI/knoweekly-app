"use client";

import { X } from "lucide-react";
import { DeleteBlog } from "./action";
import { SetStateAction, useActionState, useEffect } from "react";
import { useErrorModal, useSuccessModal } from "@/app/contexts/feedbackContext";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

type Props = {
  id: number;
  setDeleting: React.Dispatch<SetStateAction<boolean>>;
  editing: boolean;
};

const initialState = {
  error: "",
  success: "",
};

export function DeleteButton({ id, setDeleting, editing }: Props) {
  const [state, action, pending] = useActionState(DeleteBlog, initialState);

  const { setSuccessMsg } = useSuccessModal();
  const { setErrorMsg } = useErrorModal();

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setDeleting(false);
      setSuccessMsg(state?.success);
      router.refresh();
    }
    if (state.error) {
      setErrorMsg(state.error);
    }
  }, [state]);
  return (
    <form action={action} className="delete">
      {!pending ? (
        <>
          <button type="button" onClick={() => setDeleting(false)}>
            <X />
          </button>
          <input type="hidden" name="id" defaultValue={id} />
          <label>
            type in <strong>"i want to delete"</strong>
            <input
              type="text"
              name="confirm"
              className="confirm"
              placeholder="enter confirm"
            />
          </label>

          <button type="submit">proceed</button>
        </>
      ) : (
        <div className="loading">
          <h3>deleting blog...</h3>
          <ClipLoader color="var(--bg-txt)" size={50} />
          <p>hold on a bit</p>
        </div>
      )}
    </form>
  );
}
