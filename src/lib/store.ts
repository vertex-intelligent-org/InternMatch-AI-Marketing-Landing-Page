export type StoreAvailabilityStatus =
  | "pending"
  | "live";

type StoreTarget = {
  status: StoreAvailabilityStatus;
  url: string | null;
};

type StoreConfiguration = {
  apple: StoreTarget;
  googlePlay: StoreTarget;
};

export const STORE_CONFIG: StoreConfiguration = {
  apple: {
    status: "pending",
    url: null,
  },
  googlePlay: {
    status: "pending",
    url: null,
  },
};

const appleLive =
  STORE_CONFIG.apple.status === "live" &&
  Boolean(STORE_CONFIG.apple.url);

const googlePlayLive =
  STORE_CONFIG.googlePlay.status === "live" &&
  Boolean(STORE_CONFIG.googlePlay.url);

const anyLive =
  appleLive || googlePlayLive;

const allLive =
  appleLive && googlePlayLive;

const availabilityCopy = allLive
  ? "InternMatch AI is now available on the App Store and Google Play."
  : appleLive
    ? "InternMatch AI is available on the App Store. Google Play availability is coming soon."
    : googlePlayLive
      ? "InternMatch AI is available on Google Play. App Store availability is coming soon."
      : "InternMatch AI is coming to the App Store and Google Play.";

export const STORE_RELEASE = {
  appleLive,
  googlePlayLive,
  anyLive,
  allLive,

  footerTitle: anyLive
    ? "Download InternMatch AI"
    : "InternMatch AI for iPhone & Android",

  availabilityCopy,

  badgeStatusText: allLive
    ? "Available on iPhone and Android"
    : appleLive
      ? "Available on iPhone · Google Play coming soon"
      : googlePlayLive
        ? "Available on Android · App Store coming soon"
        : "Coming to the App Store and Google Play",

  shortStatus: allLive
    ? "Available on App Store & Google Play"
    : anyLive
      ? "Store rollout in progress"
      : "App Store & Google Play · Coming soon",

  platformStatus: allLive
    ? "Core product built and validated; now publicly available on the App Store and Google Play."
    : anyLive
      ? "Core product built and validated; public store rollout is in progress."
      : "Core product built and validated; public store availability is pending.",

  validationCopy: allLive
    ? "Automated validation, structured architecture and a core product supporting a public mobile release."
    : "Automated validation, structured architecture and a core product prepared for public store release.",

  journeyIntro: allLive
    ? "A disciplined transition from an initial hackathon concept to a public mobile product."
    : "A disciplined transition from an initial hackathon concept toward public store release.",

  currentJourneyCue: allLive
    ? "Public release available"
    : anyLive
      ? "Store rollout in progress"
      : "Awaiting public store availability",

  availabilityFaq: availabilityCopy,

  platformFaq: allLive
    ? "Yes. InternMatch AI is available for iPhone through the App Store and for Android through Google Play."
    : appleLive
      ? "InternMatch AI is available for iPhone through the App Store. Google Play availability is still pending."
      : googlePlayLive
        ? "InternMatch AI is available for Android through Google Play. App Store availability is still pending."
        : "InternMatch AI is built for iPhone and Android. Public store links will appear here as soon as each release is publicly available.",
} as const;
