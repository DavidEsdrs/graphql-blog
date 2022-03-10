import { gql, request } from "graphql-request";
import { graphqlAPI } from "./getPosts";

export const getComments = async (slug) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: { post: { slug: $slug } }) {
                name
                createdAt
                comment
            }
        }
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result.comments;
}