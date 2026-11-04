"use client";

import {
  childrenNode,
  ErrorModalType,
  SuccessModalType,
} from "@/app/types/type";
import { createContext, useContext, useState } from "react";

const SuccessModalContext = createContext<SuccessModalType | null>(null);

function SuccessModalProvider({ children }: childrenNode) {
  const [successMsg, setSuccessMsg] = useState<string>("");

  return (
    <SuccessModalContext.Provider
      value={{
        successMsg,
        setSuccessMsg,
      }}
    >
      {children}
    </SuccessModalContext.Provider>
  );
}

const ErrorModalContext = createContext<ErrorModalType | null>(null);

function ErrorModalProvider({ children }: childrenNode) {
  const [errorMsg, setErrorMsg] = useState<string>("");

  return (
    <ErrorModalContext.Provider
      value={{
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </ErrorModalContext.Provider>
  );
}

export { SuccessModalProvider, ErrorModalProvider };

export const useSuccessModal = () => {
  const context = useContext(SuccessModalContext);
  if (!context) {
    throw new Error("no context available");
  }

  return context;
};

export const useErrorModal = () => {
  const context = useContext(ErrorModalContext);
  if (!context) {
    throw new Error("no context available");
  }

  return context;
};
