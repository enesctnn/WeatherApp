import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, defaultValue: []) => {
  const [values, setValues] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch {
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(
    () => localStorage.setItem(key, JSON.stringify(values)),
    [values, key]
  );
  return [values, setValues];
};
