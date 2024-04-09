const schema = {
  notifs: {
    type: "array",
    minItems: 10,
    maxItems: 25,
    items: {
      required: ["id", "name", "email", "avatar", "date", "assignee", "desc"],
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
        date: {
          type: "string",
          faker: "date.past",
        },
        assignee: {
          type: "string",
          enum: ["jackie", "best", "falamo"],
        },
        desc: {
          type: "string",
          enum: [
            "Details of notification can be found here. A transaction was unsuccessful. notification can be found here. A transaction was unsuccessful.",
          ],
        },
      },
    },
  },
};

export default schema;