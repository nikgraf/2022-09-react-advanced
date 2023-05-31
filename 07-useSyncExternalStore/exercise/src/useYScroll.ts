import { useEffect, useState } from "react";

export function useYScroll() {
  const [yScroll, setYScroll] = useState(global.window?.scrollY || 0);
  useEffect(() => {
    function onScrollChange() {
      setYScroll(global.window?.scrollY);
    }

    global.window?.addEventListener("scroll", onScrollChange);
    return () => {
      global.window?.addEventListener("scroll", onScrollChange);
    };
  }, []);
  return yScroll;
}
