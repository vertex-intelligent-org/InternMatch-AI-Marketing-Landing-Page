import type { Metadata } from "next";
import AuthLinkStatus from "../../../components/AuthLinkStatus";

export const metadata: Metadata = {
  title: "Email Confirmed | InternMatch AI",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function EmailConfirmedPage() {
  return (
    <AuthLinkStatus mode="confirmation" />
  );
}
