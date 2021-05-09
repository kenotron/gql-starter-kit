import { graphqlCodeGenTask } from "monorepo-scripts/tasks/graphql";
import { transpile } from "monorepo-scripts/just.config";
import { webpackDevServerTask, parallel } from "monorepo-scripts";

export const generate = (watch: boolean = false) =>
  graphqlCodeGenTask({
    schema: require.resolve("data"),
    documents: "./src/**/*.+(graphql|gql)",
    generates: {
      [process.cwd() + "/src/generated/query.ts"]: {
        plugins: ["typescript", "typescript-operations", "typescript-react-query"],
      },
    },
    watch
  });

export const build = transpile;

export const dev = parallel(generate(true), webpackDevServerTask());
