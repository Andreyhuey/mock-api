const schema = {
  codes: {
    type: "array",
    minItems: 100,
    maxItems: 120,
    items: {
      required: ["id", "testType", "code", "dateCreated", "usedBy", "status"],
      type: "object",
      properties: {
        id: {
          type: "integer",
          initialOffset: 1,
          autoIncrement: true,
        },
        testType: {
          type: "string",
          enum: ["hepatitis b", "malaria", "hepatitis c", "Hiv/Aids"],
        },
        code: {
          type: "string",
          faker: "string.uuid",
          maxLength: 5,
          minLength: 5,
        },
        dateCreated: {
          type: "string",
          faker: "date.past",
        },
        usedBy: {
          type: "string",
          faker: "person.firstName",
        },
        status: {
          type: "string",
          enum: ["used", "active"],
        },
      },
    },
  },
};

export default schema;
