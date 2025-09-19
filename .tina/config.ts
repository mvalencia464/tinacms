import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.VITE_TINA_CLIENT_ID || null,
  token: process.env.VITE_TINA_TOKEN || null,

  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },

  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-')}`
            },
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "HH:mm",
            },
          },
          {
            type: "string",
            label: "Author",
            name: "author",
          },
          {
            type: "string",
            label: "Excerpt",
            name: "excerpt",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            templates: [
              {
                name: "Heading",
                label: "Heading",
                inline: true,
                fields: [
                  {
                    type: "string",
                    name: "children",
                    label: "Heading Text",
                  },
                ],
              },
              {
                name: "Quote",
                label: "Quote",
                fields: [
                  {
                    type: "string",
                    name: "children",
                    label: "Quote Text",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Author",
                  },
                ],
              },
            ],
            isBody: true,
          },
        ],
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true,
          },
        ],
      },
      {
        label: "Site Settings",
        name: "settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            label: "Site Title",
            name: "title",
          },
          {
            type: "string",
            label: "Phone Number",
            name: "phone",
          },
          {
            type: "string",
            label: "Email",
            name: "email",
          },
          {
            type: "string",
            label: "Address",
            name: "address",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            label: "Service Areas",
            name: "serviceAreas",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
    ],
  },
});