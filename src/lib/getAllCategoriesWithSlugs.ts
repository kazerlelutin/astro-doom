import fetchAPI from './fetchAPI'

export async function getAllCategoriesWithSlugs() {
  const data = await fetchAPI<{ categories: { nodes: { slug: string }[] } }>(`
    {
      categories(first: 10000) {
        nodes {
          slug
        }
      }
    }
    `)
  return data?.categories
}
