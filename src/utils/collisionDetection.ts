import { pointerWithin, rectIntersection } from "@dnd-kit/core";

export function ProinterDetection() {
  const pointerCollisions = pointerWithin;
  if (pointerCollisions.length > 0) {
    return pointerCollisions;
  }
  return rectIntersection;
}
