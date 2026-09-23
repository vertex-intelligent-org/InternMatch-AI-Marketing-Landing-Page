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

  const hasLiveStore =
    appleLive || googlePlayLive;

  return (
    <div
      className={`flex flex-col gap-2 ${
        variant === "menu"
          ? "items-start text-left"
          : "items-start sm:items-end sm:text-right"
      } ${className}`}
    >
      {hasLiveStore && (
        <div
          className={`flex gap-3 ${
            variant === "menu"
              ? "flex-col items-start"
              : "flex-col items-start sm:flex-row sm:items-center"
          }`}
        >
          {appleLive &&
            STORE_CONFIG.apple.url && (
              <a
                href={STORE_CONFIG.apple.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download InternMatch AI on the App Store"
                className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] focus-visible:ring-offset-2"
              >
                <Image
                  src="/store-badges/download-on-the-app-store.svg"
                  alt=""
                  aria-hidden="true"
                  width={120}
                  height={40}
                  unoptimized
                  className="h-10 w-auto"
                />
              </a>
            )}

          {googlePlayLive &&
            STORE_CONFIG.googlePlay.url && (
              <a
                href={STORE_CONFIG.googlePlay.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get InternMatch AI on Google Play"
                className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] focus-visible:ring-offset-2"
              >
                <Image
                  src="/store-badges/get-it-on-google-play.png"
                  alt=""
                  aria-hidden="true"
                  width={134}
                  height={52}
                  unoptimized
                  className="h-[52px] w-auto"
                />
              </a>
            )}
        </div>
      )}

      <p className="text-xs leading-relaxed text-[#656B70]">
        {STORE_RELEASE.badgeStatusText}
      </p>
    </div>
  );
}
