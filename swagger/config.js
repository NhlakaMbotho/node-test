module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Invoices APIs Document",
    description: "APIs document for all operations on the inboxes app.",
    termsOfService: "",
    contact: {
      name: "Phathutshedzo Khabubu"
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT"
    }
  },
  servers: [
    {
      url: "/"
    }
  ],
  paths: {
    "/invoices": {
      get: {
        summary: "Gets a list of all invoices",
        description:
          "By passing in the appropriate options, you can search for\navailable invoices in the system\n",
        operationId: "searchInventory",
        responses: {
          "200": {
            description: "search results matching criteria",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Invoice"
                  }
                }
              }
            }
          },
          "400": {
            description: "bad input parameter"
          }
        }
      },
      post: {
        summary: "adds an invoice item",
        description: "Adds an invoice to the system",
        operationId: "addInvoice",
        requestBody: {
          description: "Invoice item to add",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Invoice"
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Invoice created"
          },
          "400": {
            description: "invalid input, object invalid"
          },
          "409": {
            description: "an existing item already exists"
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Invoice: {
        required: [
          "amount",
          "creditCardType",
          "currency",
          "customer",
          "name",
          "refNumber"
        ],
        type: "object",
        properties: {
          id: {
            type: "string",
            format: "int64",
            example: "3"
          },
          creditCardType: {
            type: "string",
            example: "jcb"
          },
          refNumber: {
            type: "string",
            example: "jce9d4f98b-b0ad-48b1-a68a-cc1c75c19fd3"
          },
          currency: {
            type: "string",
            example: "ZAR"
          },
          amount: {
            type: "number",
            format: "number",
            example: 3
          },
          dateTime: {
            type: "string",
            format: "date-time",
            example: "2016-08-29T09:12:33.001Z"
          },
          customer: {
            $ref: "#/components/schemas/Customer"
          },
          items: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Item"
            }
          }
        }
      },
      Customer: {
        required: ["email", "firstName", "lastName", "name"],
        type: "object",
        properties: {
          id: {
            type: "number",
            format: "int64",
            example: 3
          },
          firstName: {
            type: "string"
          },
          lastName: {
            type: "string"
          },
          email: {
            type: "string",
            format: "email"
          }
        }
      },
      Item: {
        required: ["category", "code", "name", "price"],
        type: "object",
        properties: {
          id: {
            type: "number",
            format: "int64",
            example: 3
          },
          code: {
            type: "string"
          },
          name: {
            type: "string"
          },
          category: {
            type: "string"
          },
          price: {
            type: "number"
          }
        }
      }
    }
  }
};
