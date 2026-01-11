import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      # scalar types | tipos nativos de GraphQL
      id: ID
      name: String
      age: Int
      average: Float

      # com o ! o campo se torna obrigatório
      married: Boolean!

      # array types | tipos de array em GraphQL
      arrayString: [String!]! # cada item tem que ser string e tem que ser array

      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      name: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return { id: "1", name: "name" }
      },
      users: () => {
        return [
          { id: "1", name: "name" },
          { id: "2", name: "name" },
          { id: "3", name: "name" },
        ]
      },
      name: () => 'name',
      id: () => "1",
      age: () => 18,
      average: () => 88.5,
      married: () => false,
      arrayString: () => ['a', 'b', 'c'],
    },
  }
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
})
