"use strict";
// export type AdvancedLabTests = {
//   id: number;
//   avatar: string;
//   first_name: string;
//   last_name: string;
//   test_type: string;
//   date: string;
//   transaction_id: string;
//   amount: number;
//   lab_name: string;
//   test_status: "yet to visit" | "processing" | "sampled" | "completed";
// };
Object.defineProperty(exports, "__esModule", { value: true });
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
                    offset: 1,
                    autoIncrement: true,
                },
                avatar: {
                    type: "string",
                    format: "URL",
                    faker: "image.avatar",
                },
                first_name: {
                    type: "string",
                    faker: "person.firstName",
                },
                last_name: {
                    type: "string",
                    faker: "person.lastName",
                },
                test_type: {
                    type: "string",
                    enum: ["HIV/AIDS"],
                },
                date: {
                    type: "string",
                    faker: "date.anytime",
                },
                transaction_id: {
                    type: "string",
                    faker: "string.uuid",
                },
                amount: {
                    type: "integer",
                    minimum: 1000,
                    maximum: 15000,
                },
                lab_name: {
                    type: "string",
                    faker: "company.name",
                },
                test_status: {
                    type: "string",
                    enum: ["yet to visit", "processing", "sampled", "completed"],
                },
            },
            required: [
                "id",
                "avatar",
                "first_name",
                "last_name",
                "test_type",
                "date",
                "transaction_id",
                "amount",
                "lab_name",
                "test_status",
            ],
        },
    },
};
exports.default = schema;
