import { transpileCjs } from "monorepo-scripts/just.config";
import { graphqlCodeGenTask } from "monorepo-scripts/tasks/graphql";
import { watch, nodeExecTask, series } from "monorepo-scripts";

export const generate = graphqlCodeGenTask({
  schema: require.resolve("data"),
  generates: {
    [process.cwd() + "/src/generated/resolvers.d.ts"]: {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
});

export const build = transpileCjs;

export const dev = () => {
  watch(require.resolve("data"), series(generate, build));
  return series(generate, build, nodeExecTask({
    args: [require.resolve('nodemon/bin/nodemon.js'), './lib']
  }));
};
