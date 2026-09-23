import type { Metadata } from "next";
import AuthLinkStatus from "../../../components/AuthLinkStatus";

export const metadata: Metadata = {
  title: "Reset Password | InternMatch AI",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PasswordResetLinkPage() {
  return (
    <AuthLinkStatus mode="password-reset" />
  );
}
