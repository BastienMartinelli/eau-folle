import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contacts",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Téléphone",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adress",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
