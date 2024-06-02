const schema = {
  data: {
    type: "array",
    minItems: 123,
    maxItems: 134,
    items: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          autoIncrement: true,
          minimum: 1,
        },
        name: {
          type: "string",
          enum: ["HIV/AIDS", "Malaria", "Hepatits B", "Typhoid", "Hepatits B"],
        },
        icon: {
          type: "string",
          faker: "image.avatar",
        },
        caption: {
          type: "string",
          enum: ["Hepatitis B is a viral infection that affects the liver"],
        },
        date_created: {
          type: "string",
          faker: "date.past",
        },
        date_updated: {
          type: "string",
          faker: "date.recent",
        },
        status: {
          type: "string",
          enum: ["true", "false"],
        },
      },
      required: [
        "id",
        "name",
        "icon",
        "caption",
        "date_created",
        "date_updated",
        "status",
      ],
    },
  },
};

export default schema;
