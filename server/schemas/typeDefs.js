const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book!]
    bookCount: Int!
  }

  input BookInput {
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getBook(bookId: String!): Book
    getUser(userId: ID!): User
  }

  type Mutation {
    addBook(book: BookInput!): Book
    deleteBook(bookId: String!): Book
    addUser(user: UserInput!): User
    loginUser(email: String!, password: String!): User
    saveBook(userId: ID!, book: BookInput!): User
    removeBook(userId: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;
