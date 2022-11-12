import { BRUCELEEKOS } from './apiBruceleekos'

export default async function fetchBruceleekos<T>(
  url: string,
  body?: Object
): Promise<T> {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(BRUCELEEKOS + url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  const json = await res.json()

  if (json.errors) {
    console.log(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json
}
