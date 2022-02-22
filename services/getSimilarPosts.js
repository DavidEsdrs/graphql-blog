import { request, gql } from "graphql-request";
import { graphqlAPI } from "./getPosts";

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetSimilarPosts($slug: String!, $categories: [String!]) {
            posts(
                where: { 
                    slug_not: $slug, 
                    AND: { 
                        categories_some: { 
                            slug_in: $categories 
                        }
                    } 
                }
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `;

    const result = await request(graphqlAPI, query, { categories, slug });

    return result.posts;
}