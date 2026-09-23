"use client";

import type {
  MouseEvent,
  ReactNode,
} from "react";

import Link from "next/link";

type HomeLogoLinkProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function HomeLogoLink({
  children,
  className = "",
  ariaLabel = "Reload InternMatch AI homepage",
}: HomeLogoLinkProps) {
  const reloadHome = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    /*
     * Always perform a fresh navigation to the canonical homepage.
     * Manual restoration ensures a homepage reload starts at the top
     * instead of restoring an old scroll position.
     */
    window.history.scrollRestoration =
      "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    /*
     * A full document navigation is intentional here:
     * clicking the brand logo must reload the homepage from
     * the top rather than perform a client-side route transition.
     */
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign(
      `${window.location.origin}/`
    );
  };

  return (
    <Link
      href="/"
      onClick={reloadHome}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </Link>
  );
}
