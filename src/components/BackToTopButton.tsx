"use client";

export function BackToTopButton() {
  const backToTop = () => {
    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion
        ? "auto"
        : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={backToTop}
      aria-label="Back to top"
      title="Back to top"
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D8E2E5] bg-white text-[#467A8F] shadow-[0_8px_24px_rgba(23,26,28,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A3C7D1] hover:bg-[#F2F7F8] hover:shadow-[0_10px_28px_rgba(23,26,28,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] focus-visible:ring-offset-2"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
      >
        <path
          d="M6.75 14.25 12 9l5.25 5.25"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
