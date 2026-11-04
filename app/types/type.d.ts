import { type, ReactNode, SetStateAction } from "react";

export type childrenNode = {
  children: ReactNode;
};

export type SuccessModalType = {
  successMsg: string;
  setSuccessMsg: React.Dispatch<SetStateAction<string>>;
};

export type ErrorModalType = {
  errorMsg: string;
  setErrorMsg: React.Dispatch<SetStateAction<string>>;
};
