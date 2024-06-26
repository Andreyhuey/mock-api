"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    campaign: {
        type: "array",
        minItems: 50,
        maxItems: 50,
        items: {
            required: [
                "id",
                "name",
                "noOfImages",
                "dateCreated",
                "dateEdited",
                "status",
            ],
            type: "object",
            properties: {
                id: {
                    type: "string",
                    faker: "string.uuid",
                },
                name: {
                    type: "string",
                    enum: [
                        "Sale-a-Palooza",
                        "Flash Deals Biltz",
                        "Holiday Hustle",
                        "Clearance Carnival",
                        "VIP Exclusive Showcase",
                        "Bundle Bonanza",
                        "Seasonal Spectacular",
                        "Daily Dazzle Deals",
                        "Limited-Time Luxury",
                        "Reward Roundup",
                    ],
                },
                noOfImages: {
                    type: "integer",
                    maximum: 20,
                    minimum: 1,
                    exclusiveMaximum: true,
                },
                dateCreated: {
                    type: "string",
                    faker: "date.past",
                },
                dateEdited: {
                    type: "string",
                    faker: "date.past",
                },
                status: {
                    type: "boolean",
                },
            },
        },
    },
};
exports.default = schema;
