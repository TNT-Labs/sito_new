import { defineConfig } from "tinacms";

// Schema delle collezioni per il CMS
const schema = {
  collections: [
    {
      name: "page",
      label: "Pagine",
      path: "content/pages",
      format: "mdx",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Titolo",
          isTitle: true,
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Descrizione",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "rich-text",
          name: "body",
          label: "Contenuto",
          isBody: true,
        },
      ],
    },
    {
      name: "servizio",
      label: "Servizi",
      path: "content/servizi",
      format: "mdx",
      fields: [
        {
          type: "string",
          name: "titolo",
          label: "Titolo Servizio",
          isTitle: true,
          required: true,
        },
        {
          type: "string",
          name: "slug",
          label: "URL Slug",
          required: true,
        },
        {
          type: "string",
          name: "descrizioneBreve",
          label: "Descrizione Breve",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "icona",
          label: "Icona",
        },
        {
          type: "rich-text",
          name: "body",
          label: "Descrizione Completa",
          isBody: true,
        },
        {
          type: "boolean",
          name: "inEvidenza",
          label: "In Evidenza",
        },
      ],
    },
    {
      name: "news",
      label: "News e Aggiornamenti",
      path: "content/news",
      format: "mdx",
      fields: [
        {
          type: "string",
          name: "titolo",
          label: "Titolo",
          isTitle: true,
          required: true,
        },
        {
          type: "datetime",
          name: "data",
          label: "Data Pubblicazione",
          required: true,
        },
        {
          type: "string",
          name: "categoria",
          label: "Categoria",
          options: ["Normativa", "Servizio", "Comunicazione", "Altro"],
        },
        {
          type: "image",
          name: "immagine",
          label: "Immagine",
        },
        {
          type: "rich-text",
          name: "body",
          label: "Contenuto",
          isBody: true,
        },
      ],
    },
    {
      name: "documento",
      label: "Documenti e Modulistica",
      path: "content/documenti",
      format: "md",
      fields: [
        {
          type: "string",
          name: "titolo",
          label: "Titolo Documento",
          isTitle: true,
          required: true,
        },
        {
          type: "string",
          name: "descrizione",
          label: "Descrizione",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "categoria",
          label: "Categoria",
          options: [
            "Modulistica",
            "Normativa",
            "Guide",
            "Circolari",
            "Altro",
          ],
        },
        {
          type: "string",
          name: "fileUrl",
          label: "URL File",
          required: true,
        },
        {
          type: "datetime",
          name: "dataAggiornamento",
          label: "Data Ultimo Aggiornamento",
        },
      ],
    },
    {
      name: "settings",
      label: "Impostazioni Sito",
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
          type: "object",
          name: "contatti",
          label: "Contatti",
          fields: [
            {
              type: "string",
              name: "indirizzo",
              label: "Indirizzo",
            },
            {
              type: "string",
              name: "telefono",
              label: "Telefono",
            },
            {
              type: "string",
              name: "email",
              label: "Email",
            },
            {
              type: "string",
              name: "pec",
              label: "PEC",
            },
          ],
        },
        {
          type: "object",
          name: "orari",
          label: "Orari Apertura",
          fields: [
            {
              type: "string",
              name: "lunVen",
              label: "Lunedì - Venerdì",
            },
            {
              type: "string",
              name: "sabato",
              label: "Sabato",
            },
            {
              type: "string",
              name: "note",
              label: "Note",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          type: "object",
          name: "social",
          label: "Social Media",
          fields: [
            {
              type: "string",
              name: "facebook",
              label: "Facebook URL",
            },
            {
              type: "string",
              name: "linkedin",
              label: "LinkedIn URL",
            },
          ],
        },
      ],
    },
  ],
};

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
  schema,
});
