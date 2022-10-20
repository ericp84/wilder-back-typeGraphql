// import "reflect-metadata";
// import { ApolloServer } from "apollo-server";
// import dataSource from "./utils";
// import resolvers from "./graphql/resolvers/Wilders";
// import typeDefs from "./graphql/schema/index";

// const server = new ApolloServer({ typeDefs, resolvers });

// const start = async () => {
//   await dataSource.initialize();
//   server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
//   });
// };
// start();

import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { WilderResolver } from "./graphql/resolvers/Wilders";
import { SkillResolver } from "./graphql/resolvers/Skills";
import { buildSchema } from "type-graphql";
import datasource from "./utils";
import { UpvoteResolver } from "./graphql/resolvers/Upvotes";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  // ... Building schema here
  const schema = await buildSchema({
    resolvers: [WilderResolver, SkillResolver, UpvoteResolver],
  });
  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
  await datasource.initialize();
  console.log("connected to BDD !!!!");
}

bootstrap();
