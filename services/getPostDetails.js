import { request, gql } from "graphql-request";
import { graphqlAPI } from "./getPosts";

export const getPostDetails = async (slug) => {
    const query = gql`
        query Post($slug: String!) {
            post(where: { slug: $slug }) {
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
            }
        }
    `;

    const res = await request(graphqlAPI, query, { slug });

    return res.post;
}