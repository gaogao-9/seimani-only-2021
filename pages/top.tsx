import React, { useCallback, useEffect, useRef, useState } from "react";
import { AspectRatio, Image } from "@chakra-ui/react";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import { breakpoints } from "~/foundation/theme";

const Page: React.VFC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = useState(0);
  const [imageLoadedCount, setIsImageLoadedCount] = useState(0);
  const onLoad = useCallback(
    () => setIsImageLoadedCount((count) => count + 1),
    [],
  );

  const resizeObserver = globalThis.ResizeObserver
    ? new globalThis.ResizeObserver(() => {
        const innerWidth = globalThis.innerWidth;
        const sideMenuWidth =
          innerWidth < parseInt(breakpoints.lg, 10) ? 0 : 270;
        const aspectRatio = Math.min(
          2.6,
          (innerWidth - sideMenuWidth) / (globalThis.innerHeight - 60),
        );

        setAspectRatio(aspectRatio);
      })
    : null;

  useEffect(() => {
    if (!ref.current || !resizeObserver) return;

    resizeObserver.observe(ref.current);

    return () => {
      if (!ref.current || !resizeObserver) return;

      resizeObserver.unobserve(ref.current);
    };
  }, [ref.current]);

  const isImageLoaded = imageLoadedCount === 4;
  const imageType =
    aspectRatio > 1.25 ? "wide" : aspectRatio >= 0.7 ? "normal" : "narrow";

  return (
    <Layout>
      <AspectRatio ref={ref} mx="auto" height="100%" ratio={aspectRatio}>
        <>
          <Image
            opacity={isImageLoaded ? 1 : 0}
            transition="opacity 0.5s"
            src="/assets/img/top.jpg"
            alt="main visual"
            objectFit="cover"
            onLoad={onLoad}
          />
          <Image
            visibility={imageType === "narrow" ? "visible" : "hidden"}
            opacity={isImageLoaded ? 1 : 0}
            transition="opacity 0.5s"
            src="/assets/img/toptext-n.png"
            alt="main visual text narrow"
            objectFit="cover"
            onLoad={onLoad}
          />
          <Image
            visibility={imageType === "normal" ? "visible" : "hidden"}
            opacity={isImageLoaded ? 1 : 0}
            transition="opacity 0.5s"
            src="/assets/img/toptext.png"
            alt="main visual text"
            objectFit="cover"
            onLoad={onLoad}
          />
          <Image
            visibility={imageType === "wide" ? "visible" : "hidden"}
            opacity={isImageLoaded ? 1 : 0}
            transition="opacity 0.5s"
            src="/assets/img/toptext-w.png"
            alt="main visual text wide"
            objectFit="cover"
            onLoad={onLoad}
          />
        </>
      </AspectRatio>
    </Layout>
  );
};

export default Page;
