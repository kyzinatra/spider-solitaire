import { pointerWithin, rectIntersection, CollisionDetection } from "@dnd-kit/core";

export function ProinterDetection() {
  // First, let's see if there are any collisions with the pointer
  const pointerCollisions = pointerWithin;
  // Collision detection algorithms return an array of collisions
  if (pointerCollisions.length > 0) {
    return pointerCollisions;
  }
  // If there are no collisions with the pointer, return rectangle intersections
  return rectIntersection;
}
