import { useEffect, useState } from "react";

interface IUseAnimation {
  isStart?: boolean;
  duration?: number;
  onAnimEnd?: () => void;
  onAnimStart?: () => void;
}

export function useAnimation({ isStart, duration = 90, onAnimEnd, onAnimStart }: IUseAnimation): boolean {
  const [isAnimStart, setAnim] = useState<boolean | undefined>(isStart);
  useEffect(() => {
    if (!isStart) return setAnim(false);
    setAnim(true);
    onAnimStart && onAnimStart();

    setTimeout(() => {
      setAnim(false);
      onAnimEnd && onAnimEnd();
    }, duration);
  }, [isStart, duration, onAnimEnd, onAnimStart]);

  return !!isAnimStart;
}
