import { defineField, defineType } from "sanity";

export default defineType({
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Contenue",
      type: "blockContent",
    }),
    defineField({
      name: "name",
      title: "Nom de la page",
      type: "string",
    }),
  ],
});
