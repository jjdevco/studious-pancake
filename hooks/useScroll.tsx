import * as React from "react";
import { useThrottleCallback } from "@react-hook/throttle";

function useScroll(ref: React.MutableRefObject<any>) {
  const [position, setPosition] = React.useState({
    offsetHeight: 0,
    scrollHeight: 0,
    scrollTop: 0,
  });

  const onScroll = React.useCallback(
    useThrottleCallback((e: any) => {
      e.stopPropagation();
      setPosition({
        offsetHeight: e.target.offsetHeight,
        scrollHeight: e.target.scrollHeight,
        scrollTop: e.target.scrollTop,
      });
    }, 15),
    []
  );

  React.useLayoutEffect(() => {
    const el = ref.current;

    setPosition({
      offsetHeight: ref.current.offsetHeight,
      scrollHeight: ref.current.scrollHeight,
      scrollTop: ref.current.scrollTop,
    });

    el?.addEventListener("scroll", onScroll);

    return () => el?.removeEventListener("scroll", onScroll);
  }, []);

  return position;
}

export { useScroll };
