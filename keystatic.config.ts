import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    // kind: "local",
    kind: "github",
    repo: 'Nombiembre/zap-keystatic',
  },
  collections: {
    sections: collection({
      label: "Sections",
      slugField: "title",
      path: "src/content/sections/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
  singletons: {
    hero: singleton({
      label: "Hero",
      path: "src/data/singletons/",
      format: { data: "json" },
      schema: {
        title: fields.text({ label: "Title" }),
        desc: fields.text({ label: "Description" }),
        rating: fields.text({ label: "Rating Text" }),
        button: fields.text({ label: "Button Text" }),
        satisfaction: fields.text({ label: "Satisfaction Text" }),
      },
    }),
  },
});
