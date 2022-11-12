import fetchAPI from './fetchAPI'
import { WP_post } from '../types/post.type'

export async function getCategoryBySlug(slug: string | number) {
  const data = await fetchAPI<{
    category: { name: string; posts: { nodes: WP_post[] } }
  }>(`
    {
      category(idType: SLUG, id: "${slug}") {
        name
        posts {
          nodes {
            featuredImage {
              node {
                  mediaDetails {
                      height
                      width
                      file
                  }
                  mediaItemUrl
              }
            }
            isSticky
            slug
            title
            excerpt
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
    `)
  return data?.category
}
