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
    }),
    defineField({
      name: "mainImage",
      title: "Image Principale",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "strength",
      title: "Titrage",
      type: "number",
    }),
    defineField({
      name: "volume",
      title: "Volume",
      type: "array",
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
