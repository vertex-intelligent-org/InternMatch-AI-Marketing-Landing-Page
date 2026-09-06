"use client";

import { useEffect, useState } from "react";

type AuthLinkMode =
  | "confirmation"
  | "password-reset";

type AuthLinkStatusProps = {
  mode: AuthLinkMode;
};

type LinkStatus =
  | "checking"
  | "success"
  | "error";

const CONTENT = {
  confirmation: {
    successTitle: "Email confirmed successfully",
    successBody:
      "Your InternMatch AI account is ready. Open the app to continue securely.",
    errorTitle: "Confirmation link unavailable",
    errorBody:
      "This confirmation link is invalid or has expired. Return to InternMatch AI and request a new confirmation email.",
    button: "Open InternMatch AI",
    deepLink: "internmatch://auth-confirmed",
  },
  "password-reset": {
    successTitle: "Continue your password reset",
    successBody:
      "Open InternMatch AI to securely choose your new password.",
    errorTitle: "Password reset link unavailable",
    errorBody:
      "This password reset link is invalid or has expired. Return to InternMatch AI and request a new reset email.",
    button: "Open InternMatch AI",
    deepLink: "internmatch://reset-password",
  },
} as const;

function callbackIsValid(): boolean {
  const query = new URLSearchParams(
    window.location.search
  );

  const fragment = new URLSearchParams(
    window.location.hash.startsWith("#")
      ? window.location.hash.slice(1)
      : window.location.hash
  );

  const hasError = Boolean(
    query.get("error") ||
      query.get("error_code") ||
      fragment.get("error") ||
      fragment.get("error_code")
  );

  if (hasError) {
    return false;
  }

  const code =
    query.get("code") ||
    fragment.get("code");

  if (code) {
    return true;
  }

  const accessToken =
    query.get("access_token") ||
    fragment.get("access_token");

  const refreshToken =
    query.get("refresh_token") ||
    fragment.get("refresh_token");

  return Boolean(
    accessToken &&
      refreshToken
  );
}

export default function AuthLinkStatus({
  mode,
}: AuthLinkStatusProps) {
  const [status, setStatus] =
    useState<LinkStatus>("checking");

  const content = CONTENT[mode];

  useEffect(() => {
    setStatus(
      callbackIsValid()
        ? "success"
        : "error"
    );
  }, []);

  const openApp = () => {
    const suffix =
      `${window.location.search}${window.location.hash}`;

    window.location.assign(
      `${content.deepLink}${suffix}`
    );
  };

  const isChecking =
    status === "checking";

  const isError =
    status === "error";

  const title = isChecking
    ? "Checking your secure link"
    : isError
      ? content.errorTitle
      : content.successTitle;

  const body = isChecking
    ? "Please wait a moment while InternMatch AI checks the authentication result."
    : isError
      ? content.errorBody
      : content.successBody;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7FAFB] px-5 py-12 text-[#16232E]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#DDEFF3]/70 blur-3xl"
      />

      <section
        aria-live="polite"
        className="relative w-full max-w-[520px] rounded-[32px] border border-[#D7E4E8] bg-white/90 p-8 text-center shadow-[0_24px_80px_rgba(22,35,46,0.10)] backdrop-blur-xl sm:p-10"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#CFE3E8] bg-[#EEF7F8]">
          {isChecking ? (
            <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-[#A7CBD3] border-t-[#156B7A]" />
          ) : (
            <span
              className={`text-3xl font-semibold ${
                isError
                  ? "text-[#B44747]"
                  : "text-[#156B7A]"
              }`}
            >
              {isError ? "!" : "\u2713"}
            </span>
          )}
        </div>

        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.20em] text-[#527580]">
          InternMatch AI
        </p>

        <h1 className="text-[30px] font-semibold leading-tight tracking-[-0.03em] sm:text-[34px]">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-7 text-[#66757D]">
          {body}
        </p>

        {!isChecking ? (
          <button
            type="button"
            onClick={openApp}
            className="mt-8 flex h-12 w-full items-center justify-center rounded-full bg-[#156B7A] px-6 text-[15px] font-semibold text-white transition hover:bg-[#115D69] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#156B7A] focus-visible:ring-offset-2"
          >
            {content.button}
          </button>
        ) : null}

        <a
          href="/"
          className="mt-5 inline-flex text-[13px] font-medium text-[#527580] underline-offset-4 hover:underline"
        >
          Back to internmatch.college
        </a>

        <p className="mt-7 text-[12px] leading-5 text-[#88959B]">
          Authentication credentials are handled by the secure callback and are not displayed on this page.
        </p>
      </section>
    </main>
  );
}
