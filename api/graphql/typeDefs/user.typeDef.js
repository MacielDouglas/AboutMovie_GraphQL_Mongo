const userTypeDef = `#graphql

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
}

type Query {
    login(username: String!, password: String!): User
}
`;

export default userTypeDef;
