export function camelCase(text: string): `%23${string}` {
  const str = text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
  return `%23${str}`
}
