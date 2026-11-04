"use client";

import { useEffect } from "react";
import { useErrorModal, useSuccessModal } from "../contexts/feedbackContext";
import { CircleAlert, CircleCheck } from "lucide-react";
import styles from "./modal.module.css";

function SuccessModal() {
  const { successMsg, setSuccessMsg } = useSuccessModal();

  useEffect(() => {
    document.body.style.overflow = successMsg ? "hidden" : "";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [successMsg]);

  return (
    <>
      {successMsg && (
        <div className={styles.feedback_modal}>
          <div className={styles.success}>
            <CircleCheck size={30} color="green" />
            <p className={styles.success}>{successMsg}</p>
            <button type="button" onClick={() => setSuccessMsg("")}>
              ok
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ErrorModal() {
  const { errorMsg, setErrorMsg } = useErrorModal();

  useEffect(() => {
    document.body.style.overflow = errorMsg ? "hidden" : "";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [errorMsg]);

  return (
    <>
      {errorMsg && (
        <div className={styles.feedback_modal}>
          <div className={styles.error}>
            <CircleAlert size={30} color="red" />
            <p className={styles.error}>{errorMsg}</p>
            <button type="button" onClick={() => setErrorMsg("")}>
              ok
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export { SuccessModal, ErrorModal };
