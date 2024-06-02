// export type TeleconsultationData = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   treatment_by: string;
//   date: string;
//   transaction_id: string;
//   scheduled_date: string;
//   amount: number;
//   location: string;
//   status: "re-scheduled" | "waiting" | "canceled" | "seen";
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
        first_name: {
          type: "string",
          faker: "person.firstName",
        },
        last_name: {
          type: "string",
          faker: "person.lastName",
        },
        treatment_by: {
          type: "string",
          faker: "person.middleName",
        },
        date: {
          type: "string",
          faker: "date.past",
        },
        transaction_id: {
          type: "string",
          faker: {
            "string.alphanumeric": 8,
          },
        },
        scheduled_date: {
          type: "string",
          faker: "date.soon",
        },
        amount: {
          type: "integer",
          minimum: 1000,
          maximum: 9999,
        },
        location: {
          type: "string",
          faker: "location.state",
        },
        status: {
          type: "string",
          enum: ["re-scheduled", "waiting", "canceled", "seen"],
        },
      },
      required: [
        "id",
        "first_name",
        "last_name",
        "treatment_by",
        "date",
        "transaction_id",
        "scheduled_date",
        "amount",
        "location",
        "status",
      ],
    },
  },
};

export default schema;
