import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import fs from "fs";
import { Resolvers } from "./generated/resolvers";
import cors from "cors";

const typeDefs = fs.readFileSync(require.resolve("data/src/schema.gql"), "utf-8");

const task = {
  id: "100",
  title: "hi",
  done: false,
};

const resolvers: Resolvers = {
  Query: {
    findTask: () => {
      return task;
    },
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  })
);

app.listen(3000);

console.log("Running a GraphQL API server at http://localhost:3000/graphql");
