import { defineField, defineType } from "sanity";

export default defineType({
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom (dans l'url)",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Titre de la page (visible sur la page)",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Contenu",
      type: "blockContent",
    }),
  ],
});
