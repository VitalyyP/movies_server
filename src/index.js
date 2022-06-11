const fs = require("fs");
const path = require("path");
const { ApolloServer } = require("apollo-server");

const Query = require("./resolvers/Query");
// const Query = {
//   page: 1,
//   totalResults: 10,
//   totalPages: 10,
//   results: [
//     {
//       id: "1",
//       title: "movie title",
//       releaseDate: "release date",
//       posterPath: "https://www.themoviedb.org/tv/92830-obi-wan-kenobi#",
//       genres: [
//         {
//           id: 1,
//           name: "Drama",
//         },
//       ],
//     },
//   ],
// };
console.log(Query);

const typeDefs = `
  type Query {
    hello: String
    otherField: String
    movies: [Movie]
    genres: Genre
  }

  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    posterPath: String
    genres: [Genre]
  }

  type Genre {
    id: Int!
    name: String!
  }

  `;

// const typeDefs = `
//   type Query {
//   movies: String!
// }

// type Mutation {

// }

// type Movies {
//   page: Int!
//   totalResults: Int!
//   totalPages: Int!
//   results: [Movie]!
// }

// type Movie {
//   id: ID!
//   title: String!
//   releaseDate: String!
//   posterPath: String
//   genres: [Genre]
// }

// type Genre {
//   id: Int!
//   name: String!
// }

// const resolvers = {
//   Query: {
//     movies: () => `aafafa`,
//   },
// };

const resolvers = {
  Query,
};

// const resolvers = {
//   Query: {
//     hello: () => "Hello world",
//     otherField: () => "Let's go",
//     // movies: () => ["Star wars", "Bad boys"],
//     genres: () => ({ id: 1, name: "Name" }),
//     movies: () => [
//       {
//         id: 1,
//         title: "movie title",
//         releaseDate: "release date",
//         posterPath: "https://www.themoviedb.org/tv/92830-obi-wan-kenobi#",
//         genres: [
//           {
//             id: 1,
//             name: "Drama",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "movie title2",
//         releaseDate: "release date2",
//         posterPath: "https://www.themoviedb.org/tv/92830-obi-wan-kenobi#",
//         genres: [
//           {
//             id: 1,
//             name: "Drama",
//           },
//         ],
//       },
//     ],
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
