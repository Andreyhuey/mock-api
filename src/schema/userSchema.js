const schema = {
  users: {
    type: "array",
    minItems: 10,
    maxItems: 15,
    items: {
      type: "object",
      properties: {
        id: {
          type: "integer",
        },
        name: {
          type: "string",
          faker: "person.firstName",
        },
        email: {
          type: "string",
          format: "email",
          faker: "internet.email",
        },
        age: {
          type: "integer",
          minimum: 18,
          maximum: 99,
        },
      },
      required: ["id", "name", "email", "age"],
    },
  },
};

export default schema;
