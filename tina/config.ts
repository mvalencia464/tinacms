import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.TINA_BRANCH || process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.VITE_TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN || process.env.VITE_TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
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
            name: "title",
            label: "Main Title",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "string",
            name: "phoneNumber",
            label: "Phone Number",
            required: true,
          },
          {
            type: "object",
            name: "rating",
            label: "Rating",
            fields: [
              {
                type: "number",
                name: "stars",
                label: "Star Rating",
                required: true,
              },
              {
                type: "string",
                name: "reviewCount",
                label: "Review Count",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "keyBenefits",
            label: "Key Benefits",
            list: true,
            fields: [
              {
                type: "string",
                name: "benefit",
                label: "Benefit",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "serviceAreas",
            label: "Service Areas",
            required: true,
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "content/services",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Service Description",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Service Image",
          },
          {
            type: "string",
            name: "icon",
            label: "Icon Name (Lucide React)",
            required: true,
          },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Customer Name",
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true,
          },
          {
            type: "string",
            name: "text",
            label: "Testimonial Text",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "timeAgo",
            label: "Time Ago",
            required: true,
          },
          {
            type: "object",
            name: "badges",
            label: "Badges",
            fields: [
              {
                type: "boolean",
                name: "beforeAfter",
                label: "Before & After",
              },
              {
                type: "boolean",
                name: "commercial",
                label: "Commercial",
              },
              {
                type: "boolean",
                name: "aboveAndBeyond",
                label: "Above & Beyond",
              },
              {
                type: "boolean",
                name: "savedMoney",
                label: "Saved Money",
              },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Contact Information",
        path: "content/contact",
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
            name: "phoneNumber",
            label: "Phone Number",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
            required: true,
          },
          {
            type: "object",
            name: "address",
            label: "Address",
            fields: [
              {
                type: "string",
                name: "street",
                label: "Street Address",
                required: true,
              },
              {
                type: "string",
                name: "city",
                label: "City",
                required: true,
              },
              {
                type: "string",
                name: "state",
                label: "State",
                required: true,
              },
              {
                type: "string",
                name: "zipCode",
                label: "ZIP Code",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "serviceAreas",
            label: "Service Areas",
            ui: {
              component: "textarea",
            },
            required: true,
          },
        ],
      },
    ],
  },
});