"use strict";
// id: number;
// partner_name: string;
// first_name: string;
// last_name: string;
// email_address: string;
// phone_number: string;
// date: string;
// location: string;
// status: "pending" | "suspended" | "approved";
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
                    autoIncrement: true,
                    minimum: 1,
                },
                partner_name: {
                    type: "string",
                    faker: "company.name",
                },
                first_name: {
                    type: "string",
                    faker: "person.firstName",
                },
                last_name: {
                    type: "string",
                    faker: "person.lastName",
                },
                email_address: {
                    type: "string",
                    faker: "internet.email",
                },
                phone_number: {
                    type: "string",
                    faker: "phone.number",
                },
                date: {
                    type: "string",
                    faker: "date.past",
                },
                location: {
                    type: "string",
                    faker: "location.state",
                },
                status: {
                    type: "string",
                    enum: ["pending", "suspended", "approved"],
                },
            },
            required: [
                "id",
                "partner_name",
                "first_name",
                "last_name",
                "email_address",
                "phone_number",
                "date",
                "location",
                "status",
            ],
        },
    },
};
exports.default = schema;
