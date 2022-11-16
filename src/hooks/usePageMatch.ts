import { useEffect, useState } from "react";

export function usePageMatch(path: string) {
  const [isMatch, setMatch] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined" && path == window.location.pathname) {
      return setMatch(true);
    }
    setMatch(false);
  }, [path, isMatch]);
  return isMatch;
}
