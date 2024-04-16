import { useRef } from "react";

/**
 * Custom React hook to determine if the current render is the first render.
 * This hook uses a ref to keep track of whether the component is rendering for the first time.
 * @returns {boolean} true if the current render is the first render, false otherwise.
 */
export function useFirstRender() {
  const ref = useRef(true);
  const firstRender = ref.current;
  ref.current = false;
  return firstRender;
}
