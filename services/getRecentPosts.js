import { request, gql } from "graphql-request";
import { graphqlAPI } from "./getPosts";

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostsDetails() {
            posts(
                orderBy: createdAt_ASC
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

    const result = await request(graphqlAPI, query);

    return result.posts;
}