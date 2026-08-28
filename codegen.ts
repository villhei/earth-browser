import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema.graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/graphql/types.generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHOC: false,
        withComponent: false,
        withMutationFn: false,
      },
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "graphql/types.generated.ts",
        extension: ".generated.tsx",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        withHOC: false,
        withComponent: false,
        withMutationFn: false,
      },
    },
  },
  config: {
    scalars: {
      DateTime: "string",
      JSON: "{ [key: string]: unknown }",
    },
  },
}

export default config
