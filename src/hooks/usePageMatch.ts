import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function usePageMatch(path: string) {
  const [isMatch, setMatch] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (path == router.pathname) {
      return setMatch(true);
    }
    setMatch(false);
  }, [path, isMatch, router.pathname]);
  return isMatch;
}
