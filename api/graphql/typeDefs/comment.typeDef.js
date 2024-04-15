const commentTypeDef = `#graphql

type Comment {
    _id: ID!
    name: String
    email: String
    movie_id: ID!
    text: String
    date: Date
}

type Query {
    comment(id: ID!, year: Int!): [Comment]
}
`;

export default commentTypeDef;
