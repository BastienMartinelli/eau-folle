import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "categorty",
      title: "Categorie",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Image Principale",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "strength",
      title: "Titrage",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "volume",
      title: "Volume",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "number",
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
