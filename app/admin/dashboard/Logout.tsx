"use client";

import { LogoutAdmin } from "./action/logout";

export function LogoutButton() {
  return (
    <button type="button" onClick={LogoutAdmin}>
      logout
    </button>
  );
}
