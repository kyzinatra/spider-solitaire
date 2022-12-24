export function getRand(min: number, max: number) {
  return ~~(Math.random() * (max - min) + min);
}
