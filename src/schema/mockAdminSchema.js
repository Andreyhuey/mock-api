const schema = {
  admins: {
    type: "array",
    minItems: 25,
    maxItems: 25,
    items: {
      type: "object",
      properties: {
        id: {
          type: "string",
          faker: "string.uuid",
        },
        name: {
          type: "string",
          faker: "person.firstName",
        },
        email: {
          type: "string",
          faker: "internet.email",
        },
        avatar: {
          type: "string",
          format: "URL",
          faker: "image.avatar",
        },
        lastActive: {
          type: "string",
          enum: [
            "pending invite",
            "2 hrs ago",
            "Yesterday",
            "Jan 6,2023",
            "active",
          ],
        },

        role: {
          type: "string",
          enum: ["Admin", "Super Admin"],
        },
      },
      required: ["id", "name", "email", "avatar", "lastActive", "role"],
    },
  },
};

export default schema;
