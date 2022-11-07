export function clx(...args: any[]) {
  return args.flatMap(a => (a ? [String(a)] : [])).join(" ");
}
