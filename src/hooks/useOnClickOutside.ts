import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

/**
 * Custom React hook that allows detecting clicks outside of a specified element.
 * @template T - The type of the HTML element to be monitored for clicks outside.
 * @param {React.RefObject<T>} ref - Reference to the HTML element to monitor.
 * @param {(event: MouseEvent | TouchEvent) => void} handler - Function to be called when a click occurs outside the specified element.
 * @returns {void}
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    /**
     * Event listener function to handle mouse and touch events and check if the click occurred outside the specified element.
     * @param {MouseEvent | TouchEvent} event - The mouse or touch event.
     * @returns {void}
     */
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};
