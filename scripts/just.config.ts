import { tscTask, esbuildTask, jestTask, eslintTask, webpackDevServerTask, webpackCliTask } from "just-scripts";
import * as path from "path";
import * as glob from "fast-glob";

export const typecheck = tscTask({ emitDeclarationOnly: true });

export const transpile = () =>
  esbuildTask({
    entryPoints: glob.sync("src/**/*.ts"),
    outdir: "lib",
  });

export const transpileCjs = () =>
  esbuildTask({
    entryPoints: glob.sync("src/**/*.ts"),
    outdir: "lib",
    format: 'cjs'
  });


export const test = jestTask({
  config: path.join(__dirname, "config", "jest.config.js"),
});

export const lint = eslintTask({
  files: [path.join(process.cwd(), "src")],
  extensions: ".ts,.tsx",
  cache: true,
  fix: process.argv.includes("--fix"),
  timing: process.argv.includes("--timing"),
});

export const bundle = () => webpackCliTask();

export const webpackDevServer = () => webpackDevServerTask();
