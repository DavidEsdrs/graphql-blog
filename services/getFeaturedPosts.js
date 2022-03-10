import { graphqlAPI } from "./getPosts";
import { gql, request } from "graphql-request";

export const getFeaturedPosts = async () => {
    const query = gql`
        query FeaturedPosts {
            posts(where: {featuredPost: true}) {
                id
                title
                slug
                createdAt
                author {
                    name
                    photo {
                        url
                    }
                }
                title
                featuredImage {
                    url
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.posts;
}