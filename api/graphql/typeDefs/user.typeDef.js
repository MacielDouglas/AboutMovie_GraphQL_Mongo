const userTypeDef = `#graphql

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean!
}

type Query {
    login(email: String!, password: String!): LoginResponse!
    logoutUser: LogoutResponse!
}

type Mutation {
    registerUser(username: String!, email: String!, password: String!): User!
}

type LoginResponse {
    token: String!
    id: ID!
    username: String!
    email: String!
    isAdmin: Boolean!
}

type LogoutResponse {
  success: Boolean!
  message: String!
}
`;

export default userTypeDef;
