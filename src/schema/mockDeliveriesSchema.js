// export type Deliveries = {
//   id: number,
//   product: string, || HIV/AIDS
//   avatar: string,
//   firstName: string,
//   lastName: string,
//   time: string,
//   amount: number,
//   location: string,
//   deliveryStatus: "Processing" | "Dispatched" | "Delivered",
// };

const schema = {
  admins: {
    type: "array",
    minItems: 100,
    maxItems: 125,
    items: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          initialOffset: 1,
          autoIncrement: true,
        },
        product: {
          type: "string",
          enum: ["HIV/AIDS"],
        },
        avatar: {
          type: "string",
          format: "URL",
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
        time: {
          type: "string",
          faker: "date.anytime",
        },
        amount: {
          type: "integer",
          minimum: 1000,
          maximum: 15000,
        },
        location: {
          type: "string",
          faker: "location.state",
        },
        deliveryStatus: {
          type: "string",
          enum: ["Processing", "Dispatched", "Delivered"],
        },
      },
      required: [
        "id",
        "product",
        "avatar",
        "firstName",
        "lastName",
        "time",
        "amount",
        "location",
        "deliveryStatus",
      ],
    },
  },
};

export default schema;
