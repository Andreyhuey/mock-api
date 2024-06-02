// export type Storestype = {
//   id: number;
//   store_name: string;
//   contact_number: string;
//   address: string;
//   date: string;
//   state: string;
// };

const schema = {
  admins: {
    type: "array",
    minItems: 100,
    maxItems: 100,
    items: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          autoIncrement: true,
          minimum: 1,
        },
        store_name: {
          type: "string",
          faker: "company.name",
        },
        contact_number: {
          type: "string",
          faker: "phone.number",
        },
        address: {
          type: "string",
          faker: "location.streetAddress",
        },
        date: {
          type: "string",
          faker: "date.past",
        },
        state: {
          type: "string",
          faker: "location.state",
        },
      },
      required: [
        "id",
        "store_name",
        "contact_number",
        "address",
        "date",
        "state",
      ],
    },
  },
};

export default schema;
