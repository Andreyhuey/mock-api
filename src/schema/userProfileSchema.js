const schema = {
  users: {
    type: "array",
    minItems: 10,
    maxItems: 25,
    items: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          unique: true,
          minimum: 1000,
          maximum: 9999,
        },
        image: {
          type: "string",
          faker: "image.avatar",
        },
        firstName: {
          type: "string",
          faker: "person.firstName",
        },
        lastName: {
          type: "string",
          faker: "person.lastName",
        },
        email: {
          type: "string",
          faker: "internet.email",
        },

        streetAddress: {
          type: "string",
          faker: "location.streetAddress",
        },
        city: {
          type: "string",
          faker: "location.city",
        },
        state: {
          type: "string",
          faker: "location.state",
        },
        zipCode: {
          type: "string",
          faker: "location.zipCode",
        },
        phoneNumber: {
          type: "string",
          faker: "phone.number",
        },
        website: {
          type: "string",
          faker: "internet.url",
        },
        company: {
          type: "string",
          faker: "company.name",
        },
        jobTitle: {
          type: "string",
          faker: "person.jobTitle",
        },
      },
      required: [
        "id",
        "image",
        "firstName",
        "lastName",
        "email",
        "streetAddress",
        "city",
        "state",
        "zipCode",
        "phoneNumber",
        "website",
        "company",
        "jobTitle",
      ],
    },
  },
};

export default schema;
