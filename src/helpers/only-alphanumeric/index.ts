export function onlyAlphanumeric(input: string | number): string {
  return String(input).replace(/[^\w]/g, '');
}
