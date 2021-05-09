import { graphqlCodeGenTask } from "monorepo-scripts/tasks/graphql";
import { transpile } from "monorepo-scripts/just.config";
import { webpackDevServerTask } from "monorepo-scripts";

export const generate = graphqlCodeGenTask({
  schema: require.resolve("data"),
  documents: "./src/**/*.+(graphql|gql)",
  generates: {
    [process.cwd() + "/src/generated/query.ts"]: {
      plugins: ["typescript", "typescript-operations", "typescript-react-query"],
    },
  },
});

export const build = transpile;

export const dev = webpackDevServerTask()