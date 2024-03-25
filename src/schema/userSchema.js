// in this schema, two different arrays are defined

const schema = {
  users: {
    type: "array",
    minItems: 100,
    maxItems: 100,
    items: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          initialOffset: 1,
          autoIncrement: true,
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
          maximum: 60,
        },
      },
      required: ["id", "name", "email", "age"],
    },
  },
  profile: {
    type: "array",
    minItems: 100,
    maxItems: 100,
    items: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          initialOffset: 1,
          autoIncrement: true,
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
