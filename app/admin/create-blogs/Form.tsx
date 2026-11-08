"use client";

import { useActionState, useEffect, useState } from "react";
import { CreateBlog } from "./action";
import { Countries } from "@/app/components/Countries";
import { ChevronDown } from "lucide-react";
import { useErrorModal, useSuccessModal } from "@/app/contexts/feedbackContext";

const initialState = {
  error: "",
  success: "",
};

export function AddForm() {
  const [state, action, pending] = useActionState(CreateBlog, initialState);
  const [showCountries, setShowCountries] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const { setSuccessMsg } = useSuccessModal();
  const { setErrorMsg } = useErrorModal();

  useEffect(() => {
    if (state.success) {
      setSuccessMsg(state.success);
      setSelectedCountry("");
    }
    if (state.error) {
      setErrorMsg(state.error);
    }
  }, [state]);
  return (
    <form action={action} className="create">
      <label className="select">
        <input type="hidden" name="country" defaultValue={selectedCountry} />
        <button type="button" onClick={() => setShowCountries(!showCountries)}>
          {selectedCountry ? selectedCountry : "choose a country"}
          <ChevronDown />
        </button>
        {showCountries && (
          <div>
            <h2>select countries</h2>
            {Countries.length ? (
              <ul>
                {Countries.map((country) => (
                  <li
                    key={country.id}
                    onClick={() => setSelectedCountry(country.country)}
                  >
                    {country.country}
                  </li>
                ))}
              </ul>
            ) : (
              <p>no countries</p>
            )}
          </div>
        )}
      </label>
      <label>
        headline
        <input type="text" name="headline" placeholder="enter headline..." />
      </label>
      <label>
        image
        <input type="file" name="image" accept="image/*" />
      </label>
      <label>
        description
        <textarea name="description" placeholder="enter description..." />
      </label>
      <label>
        source
        <input name="source" placeholder="enter source..." />
      </label>
      <label>
        source link
        <input name="source-link" placeholder="enter source link..." />
      </label>
      <button type="submit" disabled={pending}>
        {pending ? "creating..." : "create"}
      </button>
    </form>
  );
}
