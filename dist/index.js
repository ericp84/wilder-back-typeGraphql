"use strict";
// import "reflect-metadata";
// import { ApolloServer } from "apollo-server";
// import dataSource from "./utils";
// import resolvers from "./graphql/resolvers/Wilders";
// import typeDefs from "./graphql/schema/index";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const server = new ApolloServer({ typeDefs, resolvers });
// const start = async () => {
//   await dataSource.initialize();
//   server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
//   });
// };
// start();
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const Wilders_1 = require("./graphql/resolvers/Wilders");
const Skills_1 = require("./graphql/resolvers/Skills");
const type_graphql_1 = require("type-graphql");
const utils_1 = __importDefault(require("./utils"));
const Upvotes_1 = require("./graphql/resolvers/Upvotes");
const PORT = process.env.PORT || 4000;
async function bootstrap() {
    // ... Building schema here
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [Wilders_1.WilderResolver, Skills_1.SkillResolver, Upvotes_1.UpvoteResolver],
    });
    // Create the GraphQL server
    const server = new apollo_server_1.ApolloServer({
        schema,
    });
    // Start the server
    const { url } = await server.listen(PORT);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
    await utils_1.default.initialize();
    console.log("connected to BDD");
}
bootstrap();
