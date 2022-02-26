import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.MEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const handle = async (req, res) => {
    const gqlClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        }
    });

    const query = gql`
        mutation CreateCommment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createCommment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) {
                id
            }
        }
    `;

    const result = await gqlClient.request(query, req.body);

    return res.status(200).send(result);
}