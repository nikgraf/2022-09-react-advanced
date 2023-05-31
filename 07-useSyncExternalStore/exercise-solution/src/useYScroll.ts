import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: any) {
  global.window?.addEventListener("scroll", onStoreChange);
  return () => global.window?.removeEventListener("scroll", onStoreChange);
}

export function useYScroll() {
  return useSyncExternalStore(
    subscribe,
    () => global.window?.scrollY,
    () => undefined
  );
}
