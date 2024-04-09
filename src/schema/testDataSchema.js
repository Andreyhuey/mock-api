const schema = {
  users: {
    type: "array",
    minItems: 40,
    maxItems: 40,
    items: {
      type: "object",
      properties: {
        
        id: {
          type: "string",
          faker: "string.uuid",
        },
        firstName: {
          type: "string",
          faker: "person.firstName",
        },
        lastName: {
          type: "string",
          faker: "person.lastName",
        },
        avatar: {
          type: "string",
          format: "URL",
          faker: "image.avatar",
        },
        contactNumber: {
          type: "string",
          faker: "phone.number",
        },
        state: {
          type: "string",
          faker: "location.state",
        },
        test: {
          type: "string",
          enum: ["hepatitis b", "malaria", "hepatitis c", "hiv"],
        },
        treatedBy: {
          type: "string",
          faker: "person.middleName",
        },
        status: {
          type: "string",
          enum: ["pending", "confirmed"],
        },
        time: {
          type: "string",
          faker: "date.anytime",
        },
      },
      required: [
        "id",
        "firstName",
        "lastName",
        "avatar",
        "contactNumber",
        "state",
        "test",
        "treatedBy",
        "status",
        "time",
      ],
    },
  },
};

export default schema;
