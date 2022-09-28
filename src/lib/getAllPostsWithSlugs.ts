import fetchAPI from "./fetchAPI"
import { WP_post } from '../types/post.type';

export default async function getAllPostsWithSlugs() {
  const data = await fetchAPI<{posts:{edges:WP_post[]}}>(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `)
  return data?.posts
}
