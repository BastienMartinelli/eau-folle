export function isMaintenance(path?: string) {
  return (
    process.env.NEXT_DOWN === "all" ||
    (process.env.NEXT_DOWN && path && process.env.NEXT_DOWN?.includes(path))
  );
}
