import { useEffect } from "react";

export default function useKeyPress(callback, keyCodes) {
  const handler = ({ keyCode, code }) => {
    if (keyCode === 32 && keyCodes.includes(code)) {
      preventDefault();
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  });
}
