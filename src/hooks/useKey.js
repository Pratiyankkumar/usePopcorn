import { useEffect } from "react";

export function useKey(keyName, action) {
  useEffect(() => {
    const callBack = (e) => {
      if (e.code.toLowerCase() === keyName.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [action, keyName]);
}
