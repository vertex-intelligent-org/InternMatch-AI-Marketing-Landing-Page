import Image from "next/image";
import {
  STORE_CONFIG,
  STORE_RELEASE,
} from "@/lib/store";

type StoreDownloadBadgesProps = {
  variant?: "footer" | "menu";
  className?: string;
};

export function StoreDownloadBadges({
  variant = "footer",
  className = "",
}: StoreDownloadBadgesProps) {
  const {
    appleLive,
    googlePlayLive,
  } = STORE_RELEASE;

  const appleUrl =
    STORE_CONFIG.apple.url;

  const googlePlayUrl =
    STORE_CONFIG.googlePlay.url;

  return (
    <div
      className={`flex flex-col gap-2.5 ${
        variant === "menu"
          ? "items-start text-left"
          : "items-start sm:items-end sm:text-right"
      } ${className}`}
    >
      <div
        className={`flex gap-3.5 ${
          variant === "menu"
            ? "flex-col items-start"
            : "flex-wrap items-center sm:justify-end"
        }`}
      >
        {googlePlayLive && googlePlayUrl ? (
          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get InternMatch AI on Google Play"
            data-store-badge="google-play"
            className="inline-flex rounded-lg transition-[transform,opacity] duration-200 hover:scale-[1.025] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] focus-visible:ring-offset-2"
          >
            <Image
              src="/store-badges/get-it-on-google-play.png"
              alt=""
              aria-hidden="true"
              width={134}
              height={52}
              unoptimized
              className={`w-auto ${
                variant === "menu" ? "h-16" : "h-20 md:h-[5.5rem]"
              }`}
            />
          </a>
        ) : (
          <span
            aria-disabled="true"
            title="Google Play availability coming soon"
            data-store-badge="google-play"
            className="inline-flex cursor-not-allowed select-none rounded-lg opacity-40 grayscale"
          >
            <Image
              src="/store-badges/get-it-on-google-play.png"
              alt="Google Play availability coming soon"
              width={134}
              height={52}
              unoptimized
              className={`w-auto ${
                variant === "menu" ? "h-16" : "h-20 md:h-[5.5rem]"
              }`}
            />
          </span>
        )}

        {appleLive && appleUrl ? (
          <a
            href={appleUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download InternMatch AI on the App Store"
            data-store-badge="app-store"
            className="inline-flex rounded-lg transition-[transform,opacity] duration-200 hover:scale-[1.025] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] focus-visible:ring-offset-2"
          >
            <Image
              src="/store-badges/download-on-the-app-store.svg"
              alt=""
              aria-hidden="true"
              width={120}
              height={40}
              unoptimized
              className={`w-auto ${
                variant === "menu"
                  ? "h-12"
                  : "h-14 md:h-16"
              }`}
            />
          </a>
        ) : (
          <span
            aria-disabled="true"
            title="App Store availability coming soon"
            data-store-badge="app-store"
            className="inline-flex cursor-not-allowed select-none rounded-lg opacity-40 grayscale"
          >
            <Image
              src="/store-badges/download-on-the-app-store.svg"
              alt="App Store availability coming soon"
              width={120}
              height={40}
              unoptimized
              className={`w-auto ${
                variant === "menu"
                  ? "h-12"
                  : "h-14 md:h-16"
              }`}
            />
          </span>
        )}
      </div>

      <p className="text-xs leading-relaxed text-[#656B70]">
        {STORE_RELEASE.badgeStatusText}
      </p>
    </div>
  );
}
