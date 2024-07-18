import { config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "Nombiembre",
      name: "zap-keystatic",
    },
  },
  singletons: {
    test: singleton({
      label: "test",
      path: "src/content/posts/",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
