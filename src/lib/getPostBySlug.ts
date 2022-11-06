import fetchAPI from './fetchAPI'
import { WP_postStandAlone } from '../types/post.type'

export async function getPostBySlug(slug: string | number) {
  const data = await fetchAPI<{ postBy: WP_postStandAlone }>(`
    {
        postBy(slug: "${slug}") {
        title
        date
        content(format: RENDERED)
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
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
      }
    }
    `)
  return data?.postBy
}
