// id: number;
// first_name: string;
// last_name: string;
// gender: string;
// age: number;
// condition: string;
// start_date: string;
// response_time: string;
// status: "completed" | "follow-up" | "incomplete";

const schema = {
  data: {
    type: "array",
    minItems: 50,
    maxItems: 72,
    items: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          autoIncrement: true,
          minimum: 1,
        },
        first_name: {
          type: "string",
          faker: "person.firstName",
        },
        last_name: {
          type: "string",
          faker: "person.lastName",
        },
        gender: {
          type: "string",
          enum: ["male", "female"],
        },
        age: {
          type: "integer",
          enum: [20, 25, 18, 56, 32, 43, 23, 36, 45, 57],
        },
        condition: {
          type: "string",
          enum: ["Hepatitis B, Malaria, Cancer, Hiv/Aids"],
        },
        start_date: {
          type: "string",
          faker: "date.past",
        },
        response_time: {
          type: "string",
          faker: "date.recent",
        },
        status: {
          type: "string",
          enum: ["completed", "follow-up", "incomplete"],
        },
      },
      required: [
        "id",
        "first_name",
        "last_name",
        "gender",
        "age",
        "condition",
        "start_date",
        "response_time",
        "status",
      ],
    },
  },
};

export default schema;
