"use client";

import React, { useEffect, useRef } from "react";

interface HeroBowSceneProps {
  className?: string;
}

type SequenceMode = "desktop" | "mobile";

type CropRect = {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
};

const FRAME_START = 1;
const FRAME_END = 110;
const FRAME_COUNT =
  FRAME_END - FRAME_START + 1;

/*
 * Actual rendered sequence sizes.
 */
const DIMENSIONS = {
  desktop: {
    width: 1400,
    height: 900,
  },

  mobile: {
    width: 900,
    height: 900,
  },
} as const;

/*
 * We inspect multiple important animation states.
 *
 * The final crop must contain the UNION of all of them.
 * Therefore:
 *
 * - bow never clips
 * - string never clips
 * - arrow never clips
 * - target never clips
 * - impact never clips
 */
const FIT_SAMPLE_FRAMES = [
  1,
  18,
  50,
  60,
  64,
  84,
  110,
];

/*
 * Additional frames loaded first for smooth interaction.
 */
const PRELOAD_PRIORITY_FRAMES = [
  1,
  18,
  35,
  50,
  60,
  64,
  74,
  84,
  96,
  110,
];

/*
 * Color polish only.
 *
 * This does NOT affect dimensions/cropping.
 */
const COLOR_FILTER = {
  desktop:
    "saturate(1.22) contrast(1.08) brightness(0.99)",

  mobile:
    "saturate(1.24) contrast(1.09) brightness(0.99)",
} as const;

/*
 * Small breathing room around actual visible artwork.
 *
 * 0.055 = 5.5%
 *
 * This is NOT zoom.
 * It is padding around the automatically detected content.
 */
const SAFE_PADDING = 0.055;

function clamp01(value: number) {
  return Math.min(
    1,
    Math.max(0, value)
  );
}

function frameUrl(
  mode: SequenceMode,
  frame: number
) {
  return `/media/hero-bow/${mode}/frame-${String(
    frame
  ).padStart(4, "0")}.webp?v=pixel-fit-1`;
}

function expandCropToAspect(
  crop: CropRect,
  imageWidth: number,
  imageHeight: number,
  targetAspect: number
): CropRect {
  let {
    sx,
    sy,
    sw,
    sh,
  } = crop;

  const centerX =
    sx + sw / 2;

  const centerY =
    sy + sh / 2;

  const cropAspect =
    sw / sh;

  /*
   * Expand only.
   * Never shrink the detected content rectangle.
   *
   * This guarantees nothing gets cut.
   */
  if (cropAspect < targetAspect) {
    sw = sh * targetAspect;
  } else {
    sh = sw / targetAspect;
  }

  /*
   * If desired rectangle exceeds original image,
   * cap it while preserving aspect.
   */
  if (sw > imageWidth) {
    sw = imageWidth;
    sh = sw / targetAspect;
  }

  if (sh > imageHeight) {
    sh = imageHeight;
    sw = sh * targetAspect;
  }

  sx = centerX - sw / 2;
  sy = centerY - sh / 2;

  /*
   * Shift rectangle back inside source image.
   * Again: no clipping.
   */
  if (sx < 0) {
    sx = 0;
  }

  if (sy < 0) {
    sy = 0;
  }

  if (sx + sw > imageWidth) {
    sx =
      imageWidth - sw;
  }

  if (sy + sh > imageHeight) {
    sy =
      imageHeight - sh;
  }

  return {
    sx,
    sy,
    sw,
    sh,
  };
}

export function HeroBowScene({
  className = "",
}: HeroBowSceneProps) {
  const rootRef =
    useRef<HTMLDivElement>(null);

  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  const modeRef =
    useRef<SequenceMode>("desktop");

  const targetFrameRef =
    useRef(FRAME_START);

  const drawnFrameRef =
    useRef(-1);

  const imageCacheRef =
    useRef(
      new Map<
        string,
        HTMLImageElement
      >()
    );

  const loadingRef =
    useRef(
      new Map<
        string,
        Promise<HTMLImageElement>
      >()
    );

  /*
   * Crop is calculated dynamically from actual rendered pixels.
   */
  const cropRef =
    useRef<
      Record<
        SequenceMode,
        CropRect | null
      >
    >({
      desktop: null,
      mobile: null,
    });

  const cropPromiseRef =
    useRef<
      Partial<
        Record<
          SequenceMode,
          Promise<CropRect>
        >
      >
    >({});

  const scrollRafRef =
    useRef<number | null>(null);

  const resizeRafRef =
    useRef<number | null>(null);

  useEffect(() => {
    const root =
      rootRef.current;

    const canvas =
      canvasRef.current;

    if (!root || !canvas) {
      return;
    }

    let cancelled = false;

    let preloadTimer:
      | number
      | null = null;

    const mobileQuery =
      window.matchMedia(
        "(max-width: 1023px)"
      );

    const reducedMotionQuery =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    const getMode =
      (): SequenceMode =>
        mobileQuery.matches
          ? "mobile"
          : "desktop";

    const cacheKey = (
      mode: SequenceMode,
      frame: number
    ) => `${mode}:${frame}`;

    /*
     * Keep decoded frame memory bounded.
     *
     * Source WebP files are small on disk, but decoded images can
     * occupy several MB each in memory. We therefore retain only a
     * compact working set and rely on the browser HTTP cache when an
     * older frame is needed again.
     */
    const trimDecodedFrameCache = () => {
      const cache =
        imageCacheRef.current;

      const maxEntries =
        modeRef.current === "mobile"
          ? 16
          : 20;

      while (
        cache.size >
        maxEntries
      ) {
        const oldestKey =
          cache.keys().next().value;

        if (
          typeof oldestKey !==
          "string"
        ) {
          break;
        }

        cache.delete(
          oldestKey
        );
      }
    };
    /*
     * --------------------------------------------------------
     * LOAD FRAME
     * --------------------------------------------------------
     */

    const loadFrame = (
      mode: SequenceMode,
      frame: number
    ): Promise<HTMLImageElement> => {
      const key =
        cacheKey(mode, frame);

      const cached =
        imageCacheRef.current.get(
          key
        );

      if (cached) {
        /*
         * Move recently used frame to the end of the Map so the
         * bounded cache behaves like a lightweight LRU.
         */
        imageCacheRef.current.delete(
          key
        );

        imageCacheRef.current.set(
          key,
          cached
        );

        return Promise.resolve(
          cached
        );
      }

      const loading =
        loadingRef.current.get(
          key
        );

      if (loading) {
        return loading;
      }

      const promise =
        new Promise<HTMLImageElement>(
          (
            resolve,
            reject
          ) => {
            const image =
              new Image();

            image.decoding =
              "async";

            image.src =
              frameUrl(
                mode,
                frame
              );

            image.onload =
              async () => {
                try {
                  await image
                    .decode()
                    .catch(
                      () =>
                        undefined
                    );
                } finally {
                  imageCacheRef.current.set(
                    key,
                    image
                  );

                  trimDecodedFrameCache();

                  loadingRef.current.delete(
                    key
                  );

                  resolve(
                    image
                  );
                }
              };

            image.onerror =
              () => {
                loadingRef.current.delete(
                  key
                );

                reject(
                  new Error(
                    `Could not load ${image.src}`
                  )
                );
              };
          }
        );

      loadingRef.current.set(
        key,
        promise
      );

      return promise;
    };

    /*
     * --------------------------------------------------------
     * FIND ACTUAL VISIBLE PIXELS
     * --------------------------------------------------------
     *
     * We first prefer alpha detection.
     *
     * If WebP/browser returns opaque background,
     * we automatically fall back to RGB-distance detection
     * from the corner background color.
     *
     * Therefore this works whether the Blender background
     * arrives transparent OR white.
     */

    const findVisibleBounds = (
      image: HTMLImageElement
    ): CropRect | null => {
      const detector =
        document.createElement(
          "canvas"
        );

      detector.width =
        image.naturalWidth;

      detector.height =
        image.naturalHeight;

      const context =
        detector.getContext(
          "2d",
          {
            willReadFrequently:
              true,
          }
        );

      if (!context) {
        return null;
      }

      context.clearRect(
        0,
        0,
        detector.width,
        detector.height
      );

      context.drawImage(
        image,
        0,
        0
      );

      const pixels =
        context.getImageData(
          0,
          0,
          detector.width,
          detector.height
        ).data;

      const width =
        detector.width;

      const height =
        detector.height;

      /*
       * Average the four corner pixels.
       * They represent the empty Blender background.
       */
      const cornerIndexes = [
        0,
        (width - 1) * 4,
        ((height - 1) *
          width) *
          4,
        ((height * width) -
          1) *
          4,
      ];

      let bgR = 0;
      let bgG = 0;
      let bgB = 0;
      let bgA = 0;

      for (
        const index
        of cornerIndexes
      ) {
        bgR +=
          pixels[index];

        bgG +=
          pixels[index + 1];

        bgB +=
          pixels[index + 2];

        bgA +=
          pixels[index + 3];
      }

      bgR /= 4;
      bgG /= 4;
      bgB /= 4;
      bgA /= 4;

      /*
       * Transparent render:
       * alpha is enough.
       *
       * Opaque render:
       * detect deviation from empty background.
       */
      const transparentBackground =
        bgA < 32;

      let minX = width;
      let minY = height;
      let maxX = -1;
      let maxY = -1;

      /*
       * Step 2 is enough for detection and cuts
       * processing cost by ~75%.
       */
      const step = 2;

      for (
        let y = 0;
        y < height;
        y += step
      ) {
        for (
          let x = 0;
          x < width;
          x += step
        ) {
          const index =
            (y * width + x) *
            4;

          const r =
            pixels[index];

          const g =
            pixels[index + 1];

          const b =
            pixels[index + 2];

          const a =
            pixels[index + 3];

          let visible = false;

          if (
            transparentBackground
          ) {
            visible = a > 14;
          } else {
            const dr =
              r - bgR;

            const dg =
              g - bgG;

            const db =
              b - bgB;

            const distance =
              Math.sqrt(
                dr * dr +
                  dg * dg +
                  db * db
              );

            /*
             * Ignores tiny compression/background variation,
             * while retaining teal geometry and shadows.
             */
            visible =
              distance > 18;
          }

          if (!visible) {
            continue;
          }

          if (x < minX) {
            minX = x;
          }

          if (x > maxX) {
            maxX = x;
          }

          if (y < minY) {
            minY = y;
          }

          if (y > maxY) {
            maxY = y;
          }
        }
      }

      if (
        maxX < minX ||
        maxY < minY
      ) {
        return null;
      }

      return {
        sx: minX,
        sy: minY,
        sw:
          maxX -
          minX +
          step,
        sh:
          maxY -
          minY +
          step,
      };
    };

    /*
     * --------------------------------------------------------
     * COMPUTE ONE SAFE CROP FOR ENTIRE ANIMATION
     * --------------------------------------------------------
     *
     * Important:
     *
     * We do NOT calculate a different crop per frame.
     *
     * That would create camera pumping / zooming.
     *
     * Instead:
     * - inspect important animation states
     * - calculate union
     * - use SAME crop for every one of the 110 frames
     */

    const calculateSequenceCrop =
      async (
        mode: SequenceMode
      ): Promise<CropRect> => {
        const images =
          await Promise.all(
            FIT_SAMPLE_FRAMES.map(
              (frame) =>
                loadFrame(
                  mode,
                  frame
                )
            )
          );

        const imageWidth =
          images[0]
            .naturalWidth;

        const imageHeight =
          images[0]
            .naturalHeight;

        let minX =
          imageWidth;

        let minY =
          imageHeight;

        let maxX = 0;
        let maxY = 0;

        let found =
          false;

        for (
          const image
          of images
        ) {
          const bounds =
            findVisibleBounds(
              image
            );

          if (!bounds) {
            continue;
          }

          found = true;

          minX = Math.min(
            minX,
            bounds.sx
          );

          minY = Math.min(
            minY,
            bounds.sy
          );

          maxX = Math.max(
            maxX,
            bounds.sx +
              bounds.sw
          );

          maxY = Math.max(
            maxY,
            bounds.sy +
              bounds.sh
          );
        }

        /*
         * Safety fallback:
         * entire frame.
         */
        if (!found) {
          return {
            sx: 0,
            sy: 0,
            sw: imageWidth,
            sh: imageHeight,
          };
        }

        let contentWidth =
          maxX - minX;

        let contentHeight =
          maxY - minY;

        /*
         * Small safety margin around visible geometry.
         */
        const padX =
          contentWidth *
          SAFE_PADDING;

        const padY =
          contentHeight *
          SAFE_PADDING;

        minX -= padX;
        maxX += padX;

        minY -= padY;
        maxY += padY;

        minX = Math.max(
          0,
          minX
        );

        minY = Math.max(
          0,
          minY
        );

        maxX = Math.min(
          imageWidth,
          maxX
        );

        maxY = Math.min(
          imageHeight,
          maxY
        );

        contentWidth =
          maxX - minX;

        contentHeight =
          maxY - minY;

        const destination =
          DIMENSIONS[mode];

        const targetAspect =
          destination.width /
          destination.height;

        const fitted =
          expandCropToAspect(
            {
              sx: minX,
              sy: minY,
              sw: contentWidth,
              sh: contentHeight,
            },
            imageWidth,
            imageHeight,
            targetAspect
          );

        console.info(
          `[InternMatch Hero] ${mode} pixel-fit`,
          fitted
        );

        return fitted;
      };

    const ensureCrop = (
      mode: SequenceMode
    ) => {
      const cached =
        cropRef.current[
          mode
        ];

      if (cached) {
        return Promise.resolve(
          cached
        );
      }

      const existing =
        cropPromiseRef.current[
          mode
        ];

      if (existing) {
        return existing;
      }

      const promise =
        calculateSequenceCrop(
          mode
        ).then(
          (crop) => {
            cropRef.current[
              mode
            ] = crop;

            return crop;
          }
        );

      cropPromiseRef.current[
        mode
      ] = promise;

      return promise;
    };

    /*
     * --------------------------------------------------------
     * CANVAS SIZE
     * --------------------------------------------------------
     */

    const resizeCanvas =
      () => {
        if (cancelled) {
          return;
        }

        const mode =
          modeRef.current;

        const dimensions =
          DIMENSIONS[mode];

        const cssWidth =
          root.getBoundingClientRect()
            .width;

        if (cssWidth <= 0) {
          return;
        }

        const cssHeight =
          cssWidth *
          (
            dimensions.height /
            dimensions.width
          );

        const dpr =
          Math.min(
            window.devicePixelRatio ||
              1,
            2
          );

        const pixelWidth =
          Math.max(
            1,
            Math.round(
              cssWidth * dpr
            )
          );

        const pixelHeight =
          Math.max(
            1,
            Math.round(
              cssHeight * dpr
            )
          );

        if (
          canvas.width !==
            pixelWidth ||
          canvas.height !==
            pixelHeight
        ) {
          canvas.width =
            pixelWidth;

          canvas.height =
            pixelHeight;

          canvas.style.width =
            `${cssWidth}px`;

          canvas.style.height =
            `${cssHeight}px`;

          drawnFrameRef.current =
            -1;
        }
      };

    /*
     * --------------------------------------------------------
     * DRAW
     * --------------------------------------------------------
     */

    const drawImage = (
      image: HTMLImageElement,
      frame: number
    ) => {
      if (cancelled) {
        return;
      }

      resizeCanvas();

      const context =
        canvas.getContext(
          "2d",
          {
            alpha: true,
          }
        );

      if (!context) {
        return;
      }

      context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      context.imageSmoothingEnabled =
        true;

      context.imageSmoothingQuality =
        "high";

      const mode =
        modeRef.current;

      const crop =
        cropRef.current[
          mode
        ];

      context.save();

      context.filter =
        COLOR_FILTER[
          mode
        ];

      if (crop) {
        /*
         * THIS is the fit:
         *
         * Source rectangle is calculated from the
         * ACTUAL visible Blender pixels.
         *
         * Everything stays inside.
         * Empty margins disappear.
         */
        context.drawImage(
          image,

          crop.sx,
          crop.sy,
          crop.sw,
          crop.sh,

          0,
          0,
          canvas.width,
          canvas.height
        );
      } else {
        /*
         * Temporary fallback before fit analysis completes.
         */
        context.drawImage(
          image,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      context.restore();

      drawnFrameRef.current =
        frame;
    };

    /*
     * --------------------------------------------------------
     * FIND NEAREST LOADED FRAME
     * --------------------------------------------------------
     */

    const findNearestLoadedFrame =
      (
        mode: SequenceMode,
        targetFrame: number
      ) => {
        const exact =
          imageCacheRef.current.get(
            cacheKey(
              mode,
              targetFrame
            )
          );

        if (exact) {
          return {
            frame:
              targetFrame,

            image:
              exact,
          };
        }

        for (
          let distance = 1;
          distance <
          FRAME_COUNT;
          distance += 1
        ) {
          const before =
            targetFrame -
            distance;

          const after =
            targetFrame +
            distance;

          if (
            before >=
            FRAME_START
          ) {
            const image =
              imageCacheRef.current.get(
                cacheKey(
                  mode,
                  before
                )
              );

            if (image) {
              return {
                frame: before,
                image,
              };
            }
          }

          if (
            after <=
            FRAME_END
          ) {
            const image =
              imageCacheRef.current.get(
                cacheKey(
                  mode,
                  after
                )
              );

            if (image) {
              return {
                frame: after,
                image,
              };
            }
          }
        }

        return null;
      };

    const renderTargetFrame =
      () => {
        if (cancelled) {
          return;
        }

        const mode =
          modeRef.current;

        const frame =
          targetFrameRef.current;

        if (
          drawnFrameRef.current ===
          frame
        ) {
          return;
        }

        const nearest =
          findNearestLoadedFrame(
            mode,
            frame
          );

        if (nearest) {
          drawImage(
            nearest.image,
            nearest.frame
          );
        }

        void loadFrame(
          mode,
          frame
        )
          .then(
            (image) => {
              if (
                !cancelled &&
                modeRef.current ===
                  mode &&
                targetFrameRef.current ===
                  frame
              ) {
                drawImage(
                  image,
                  frame
                );
              }
            }
          )
          .catch(
            () => undefined
          );
      };

    /*
     * --------------------------------------------------------
     * SCROLL PROGRESS
     * --------------------------------------------------------
     */

    const calculateProgress =
      () => {
        const track =
          root.closest(
            "[data-bow-track]"
          ) as
            | HTMLElement
            | null;

        if (!track) {
          return 0;
        }

        const trackRect =
          track.getBoundingClientRect();

        const rootHeight =
          root.getBoundingClientRect()
            .height;

        const stickyTop =
          window.innerWidth <
          1024
            ? 96
            : 112;

        const travel =
          Math.max(
            1,
            track.offsetHeight -
              rootHeight -
              24
          );

        return clamp01(
          (
            stickyTop -
            trackRect.top
          ) /
            travel
        );
      };

    const updateFromScroll =
      () => {
        scrollRafRef.current =
          null;

        if (cancelled) {
          return;
        }

        if (
          reducedMotionQuery.matches
        ) {
          targetFrameRef.current =
            FRAME_START;

          renderTargetFrame();

          return;
        }

        const progress =
          calculateProgress();

        const frame =
          FRAME_START +
          Math.round(
            progress *
              (
                FRAME_COUNT -
                1
              )
          );

        if (
          frame !==
          targetFrameRef.current
        ) {
          targetFrameRef.current =
            frame;

          renderTargetFrame();
        }
      };

    const requestScrollUpdate =
      () => {
        if (
          scrollRafRef.current !==
          null
        ) {
          return;
        }

        scrollRafRef.current =
          window.requestAnimationFrame(
            updateFromScroll
          );
      };

    /*
     * --------------------------------------------------------
     * RESIZE
     * --------------------------------------------------------
     */

    const requestResize =
      () => {
        if (
          resizeRafRef.current !==
          null
        ) {
          return;
        }

        resizeRafRef.current =
          window.requestAnimationFrame(
            () => {
              resizeRafRef.current =
                null;

              resizeCanvas();

              drawnFrameRef.current =
                -1;

              renderTargetFrame();

              requestScrollUpdate();
            }
          );
      };

    /*
     * --------------------------------------------------------
     * MODE SWITCH
     * --------------------------------------------------------
     */

    const switchMode =
      () => {
        const nextMode =
          getMode();

        if (
          nextMode ===
          modeRef.current
        ) {
          requestResize();

          return;
        }

        modeRef.current =
          nextMode;

        drawnFrameRef.current =
          -1;

        resizeCanvas();

        void ensureCrop(
          nextMode
        ).then(
          () => {
            if (!cancelled) {
              renderTargetFrame();
              requestScrollUpdate();
            }
          }
        );
      };

    /*
     * --------------------------------------------------------
     * PROGRESSIVE PRELOAD
     * --------------------------------------------------------
     */

    const progressivePreload =
      (
        mode: SequenceMode
      ) => {
        /*
         * Do NOT decode all 110 frames at page load.
         *
         * Keep strategic anchors available for a smooth nearest-frame
         * fallback. Exact frames are still loaded on demand while the
         * user scrolls.
         */
        const sparseFrames:
          number[] = [];

        for (
          let frame = FRAME_START;
          frame <= FRAME_END;
          frame += 10
        ) {
          sparseFrames.push(
            frame
          );
        }

        sparseFrames.push(
          FRAME_END
        );

        const frames = [
          ...new Set([
            ...PRELOAD_PRIORITY_FRAMES,
            ...sparseFrames,
          ]),
        ];

        let index = 0;

        const loadBatch =
          () => {
            if (
              cancelled ||
              modeRef.current !==
                mode
            ) {
              return;
            }

            /*
             * Only two decoded images per batch to avoid decode spikes
             * on the main thread / image decoder.
             */
            const batch =
              frames.slice(
                index,
                index + 2
              );

            index +=
              batch.length;

            for (
              const frame
              of batch
            ) {
              void loadFrame(
                mode,
                frame
              ).catch(
                () =>
                  undefined
              );
            }

            if (
              index <
              frames.length
            ) {
              preloadTimer =
                window.setTimeout(
                  loadBatch,
                  120
                );
            }
          };

        /*
         * Let the first hero frame paint before background preloading.
         */
        preloadTimer =
          window.setTimeout(
            loadBatch,
            100
          );
      };
    /*
     * --------------------------------------------------------
     * INITIALIZE
     * --------------------------------------------------------
     */

    const observer =
      new ResizeObserver(
        requestResize
      );

    observer.observe(
      root
    );

    const initialMode =
      getMode();

    modeRef.current =
      initialMode;

    resizeCanvas();

    /*
     * First calculate REAL fit.
     *
     * Then draw first frame.
     *
     * This avoids showing the tiny untrimmed version first.
     */
    void ensureCrop(
      initialMode
    )
      .then(
        () =>
          loadFrame(
            initialMode,
            FRAME_START
          )
      )
      .then(
        (image) => {
          if (cancelled) {
            return;
          }

          drawImage(
            image,
            FRAME_START
          );

          requestScrollUpdate();

          if (
            !reducedMotionQuery.matches
          ) {
            progressivePreload(
              initialMode
            );
          }
        }
      )
      .catch(
        () => undefined
      );

    window.addEventListener(
      "scroll",
      requestScrollUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      requestResize
    );

    mobileQuery.addEventListener(
      "change",
      switchMode
    );

    reducedMotionQuery.addEventListener(
      "change",
      requestScrollUpdate
    );

    /*
     * --------------------------------------------------------
     * CLEANUP
     * --------------------------------------------------------
     */

    return () => {
      cancelled = true;

      observer.disconnect();

      window.removeEventListener(
        "scroll",
        requestScrollUpdate
      );

      window.removeEventListener(
        "resize",
        requestResize
      );

      mobileQuery.removeEventListener(
        "change",
        switchMode
      );

      reducedMotionQuery.removeEventListener(
        "change",
        requestScrollUpdate
      );

      if (
        scrollRafRef.current !==
        null
      ) {
        window.cancelAnimationFrame(
          scrollRafRef.current
        );
      }

      if (
        resizeRafRef.current !==
        null
      ) {
        window.cancelAnimationFrame(
          resizeRafRef.current
        );
      }

      if (
        preloadTimer !==
        null
      ) {
        window.clearTimeout(
          preloadTimer
        );
      }

      /*
       * Release decoded frame references.
       * Browser HTTP cache remains free to reuse downloaded files.
       */
      imageCacheRef.current.clear();
      loadingRef.current.clear();

      cropPromiseRef.current = {};
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`relative w-full select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Approved Blender sequence */}
      <canvas
        ref={canvasRef}
        width={900}
        height={900}
        className="relative z-10 block h-auto w-full"
      />
    </div>
  );
}