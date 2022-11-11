import { KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";

export function useCustomSensors() {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: { x: 1, y: 1 },
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: { x: 1, y: 1 },
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  return sensors;
}
