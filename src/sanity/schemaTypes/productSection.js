export default {
  name: "product",
  title: "Product Section",
  type: "document",
  fields: [
    {
      name: "appear",
      title: "Product_Section",
      type: "boolean",
      initialValue: true,
      description: "Check this if the section should be appear.",
    },
    {
      name: "headerTitle",
      title: "Header Title",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "string",
          validation: (Rule) => Rule.required().min(1).max(100),
        },
        {
          name: "ar",
          title: "Arabic",
          type: "string",
          validation: (Rule) => Rule.required().min(1).max(100),
        },
      ],
    },
    {
      name: "subTitle",
      title: "SubTitle",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "string",
          validation: (Rule) => Rule.required().min(1).max(30),
        },
        {
          name: "ar",
          title: "Arabic",
          type: "string",
          validation: (Rule) => Rule.required().min(1).max(30),
        },
      ],
    },
    {
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "object",
          fields: [
            {
              name: "en",
              title: "English",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(30),
            },
            {
              name: "ar",
              title: "Arabic",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(30),
            },
          ],
        },
        {
          name: "url",
          title: "Button URL",
          type: "string",
          validation: (Rule) => Rule.uri({ allowRelative: true }),
        },
      ],
    },
    {
      name: "slideOne",
      title: "Prodeuct Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "smallImage",
              title: "Small Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "mainImage",
              title: "Main Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "text",
              title: "Text",
              type: "object",
              fields: [
                {
                  name: "en",
                  title: "English",
                  type: "string",
                  validation: (Rule) => Rule.required().min(1).max(100),
                },
                {
                  name: "ar",
                  title: "Arabic",
                  type: "string",
                  validation: (Rule) => Rule.required().min(1).max(100),
                },
              ],
            },
            {
              name: "smallDescription",
              title: "Small Description",
              type: "object",
              fields: [
                {
                  name: "en",
                  title: "English",
                  type: "string",
                  validation: (Rule) => Rule.required().min(1).max(100),
                },
                {
                  name: "ar",
                  title: "Arabic",
                  type: "string",
                  validation: (Rule) => Rule.required().min(1).max(100),
                },
              ],
            },
            {
              name: "otherDescriptions",
              title: "Other Descriptions",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "en",
                      title: "English",
                      type: "text",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "ar",
                      title: "Arabic",
                      type: "text",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
              validation: (Rule) =>
                Rule.min(1).error("يمكنك إدخال  فقره كحد أدني"),
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: (doc, { parent }) => parent?.text?.en || "product", // ✅ Added fallback
                slugify: (input) =>
                  input
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
                    .slice(0, 90),
                isUnique: async (slug, { document, getClient }) => {
                  const client = getClient({ apiVersion: "2023-01-01" });
                  const exists = await client.fetch(
                    `count(*[_type == $type && slug.current == $slug && _id != $id])`,
                    { type: document._type, slug, id: document._id }
                  );
                  return exists === 0;
                },
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.min(3).error("You must add at least 3 products"),
    },
    {
      name: "slideTwo",
      title: "Prodeuct Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "smallImage",
              title: "Small Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "mainImage",
              title: "Main Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "text",
              title: "Text",
              type: "object",
              fields: [
                {
                  name: "en",
                  title: "English",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "ar",
                  title: "Arabic",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              name: "smallDescription",
              title: "Small Description",
              type: "object",
              fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ar", title: "Arabic", type: "string" },
              ],
            },
            {
              name: "otherDescriptions",
              title: "Other Descriptions",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "en",
                      title: "English",
                      type: "text",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "ar",
                      title: "Arabic",
                      type: "text",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
              validation: (Rule) =>
                Rule.min(1).error("يمكنك إدخال  فقره كحد أدني"),
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: (doc, { parent }) => parent?.text?.en || "product", // ✅ Added fallback
                slugify: (input) =>
                  input
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
                    .slice(0, 90),
                isUnique: async (slug, { document, getClient }) => {
                  const client = getClient({ apiVersion: "2023-01-01" });
                  const exists = await client.fetch(
                    `count(*[_type == $type && slug.current == $slug && _id != $id])`,
                    { type: document._type, slug, id: document._id }
                  );
                  return exists === 0;
                },
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.min(3).error("You must add at least 3 products"),
    },
  ],
};
