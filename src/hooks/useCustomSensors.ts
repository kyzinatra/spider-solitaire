import { KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";

export function useCustomSensors() {
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  return sensors;
}
