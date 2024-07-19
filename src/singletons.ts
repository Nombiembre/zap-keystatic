import { fields, singleton } from "@keystatic/core";

export const heroSection = singleton({
  label: "Hero",
  path: "src/data/sections/hero",
  format: { data: "json" },
  schema: {
    title: fields.object(
      {
        title: fields.text({ label: "Text" }),
        titleSpan: fields.text({ label: "Span" }),
      },
      { label: "Title" }
    ),
    desc: fields.text({ label: "Description" }),
    rating: fields.object(
      {
        bold: fields.text({ label: "Bold Text" }),
        text: fields.text({ label: "Normal Text" }),
      },
      {
        label: "Rating",
      }
    ),
    link: fields.object(
      {
        text: fields.text({ label: "Text" }),
        url: fields.text({ label: "URL" }),
      },
      { label: "Link" }
    ),
    SatisfactionText: fields.text({ label: "Satisfaction Text" }),
  },
});

export const ctaSection = singleton({
  label: "Call to Action",
  path: "src/data/sections/cta",
  format: { data: "json" },
  schema: {
    title: fields.object(
      {
        title: fields.text({ label: "Title" }),
        alt: fields.text({ label: "Alt" }),
      },
      { label: "Title" }
    ),
    desc: fields.object(
      {
        text: fields.text({ label: "Description" }),
        alt: fields.text({ label: "Alt" }),
      },
      { label: "Description" }
    ),
    buttonText: fields.text({ label: "Button Text" }),
  },
});

export const overViewSection = singleton({
  label: "OverView",
  path: "src/data/sections/overView",
  format: { contentField: "content" },
  schema: {
    title: fields.text({ label: "Title" }),
    img: fields.text({ label: "Image Path" }),
    content: fields.markdoc({ label: "Content", extension: "md" }),
  },
});

export const briefTestimonialSection = singleton({
  label: "Brief Testimonial",
  path: "src/data/sections/briefTestimonial",
  format: { contentField: "content" },
  schema: {
    title: fields.text({ label: "Title" }),
    desc: fields.text({ label: "Description" }),
    testimonial: fields.object(
      {
        name: fields.text({ label: "Name" }),
        img: fields.text({ label: "Image Path" }),
        verified: fields.text({ label: "Verified Text" }),
      },
      { label: "Testimonial" }
    ),
    content: fields.markdoc({ label: "Content", extension: "md" }),
  },
});

export const reviewSection = singleton({
  label: "Review",
  path: "src/data/sections/review",
  format: { data: "json" },
  schema: {
    title: fields.text({ label: "Title" }),
    img: fields.text({ label: "Image Path" }),
    icon: fields.text({ label: "Icon Path" }),
    reviews: fields.array(
      fields.object(
        {
          title: fields.text({ label: "Title" }),
          desc: fields.text({ label: "Description" }),
        },
        { label: "Review" }
      ),
      {
        label: "Reviews",
      }
    ),
  },
});
