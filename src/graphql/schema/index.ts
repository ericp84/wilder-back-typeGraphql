// import { gql } from "apollo-server";

// const typeDefs = gql`
//   type Wilder {
//     id: ID
//     name: String
//     city: String
//     skills: [Skills]
//     upvotes: [Upvote!]!
//   }
//   type Upvote {
//     id: ID!
//     upvotes: Int!
//     skill: Skill!
//     wilder: Wilder!
//   }
//   type Skill {
//     id: ID!
//     upvotes: [Upvote!]!
//     name: String
//   }
//   type Skills {
//     title: String
//     votes: Int
//   }
//   input SpecialsSkills {
//     title: String
//     votes: Int
//   }
//   type Query {
//     findAll: [Wilder]
//     find(wilderId: ID): Wilder
//   }
//   type Mutation {
//     create(name: String, city: String, skills: [SpecialsSkills]): Wilder
//     deleteOneWilder(id: ID): Wilder
//     updateWilder(
//       id: ID
//       name: String
//       city: String
//       skills: [SpecialsSkills]
//     ): Wilder
//   }
// `;

// export default typeDefs;
