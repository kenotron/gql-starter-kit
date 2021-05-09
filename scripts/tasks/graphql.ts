import { CodegenContext, generate } from "@graphql-codegen/cli";
import { Types } from "@graphql-codegen/plugin-helpers";

export function graphqlCodeGenTask(
  input:
    | CodegenContext
    | (Types.Config & {
        cwd?: string;
      })
) {
  return async () => {
    await generate(input, true);
  };
}
