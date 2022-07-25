module.exports = {
  "openapi": "3.0.1",
  "info": {
    "title": "Invoices APIs Document",
    "description": "APIs document for all operations on the inboxes app.",
    "termsOfService": "",
    "contact": {
      "name": "Phathutshedzo Khabubu"
    },
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    },
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "/"
    }
  ],
  "paths": {
    "/invoices": {
      "get": {
        "summary": "Gets a list of all invoices",
        "description": "By passing in the appropriate options, you can search for\navailable invoices in the system\n",
        "operationId": "getInvoices",
        "responses": {
          "200": {
            "description": "Returns a list of invoices",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Invoice"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Adds an invoice",
        "operationId": "addInvoice",
        "requestBody": {
          "description": "Invoice item to add",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Invoice"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Invoice created"
          },
          "409": {
            "description": "Invoice already exists"
          }
        }
      }
    },
    "/invoices/{id}": {
      "get": {
        "summary": "Get invoice by id",
        "operationId": "getInvoiceById",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Invoice ID",
            "required": true,
            "style": "simple",
            "explode": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Invoice returned"
          },
          "404": {
            "description": "Invoice does not exists"
          }
        }
      },
      "put": {
        "summary": "Updates an existing invoice",
        "operationId": "updateInvoice",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Invoice ID",
            "required": true,
            "style": "simple",
            "explode": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "requestBody": {
          "description": "Invoice to update",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Invoice"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Invoice updated"
          },
          "404": {
            "description": "Invoice does not exists"
          }
        }
      },
      "delete": {
        "summary": "Delete an existing invoice",
        "operationId": "deleteInvoice",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Invoice ID",
            "required": true,
            "style": "simple",
            "explode": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Invoice deleted"
          },
          "404": {
            "description": "Invoice does not exists"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Invoice": {
        "required": [
          "amount",
          "creditCardType",
          "currency",
          "customer",
          "items",
          "refNumber"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "integer",
            "example": 3
          },
          "creditCardType": {
            "type": "string",
            "example": "jcb"
          },
          "refNumber": {
            "type": "string",
            "example": "jce9d4f98b-b0ad-48b1-a68a-cc1c75c19fd3"
          },
          "currency": {
            "type": "string",
            "example": "ZAR"
          },
          "amount": {
            "type": "string",
            "example": '300.00'
          },
          "dateTime": {
            "type": "string",
            "example": "2016-08-29T09:12:33.001Z"
          },
          "customer": {
            "$ref": "#/components/schemas/Customer"
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Item"
            }
          }
        }
      },
      "Customer": {
        "required": [
          "email",
          "firstName",
          "id",
          "lastName"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "format": "int64",
            "example": 3
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          }
        }
      },
      "Item": {
        "required": [
          "category",
          "code",
          "id",
          "name",
          "price"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "format": "int64",
            "example": 3
          },
          "code": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "category": {
            "type": "string"
          },
          "price": {
            "type": "number"
          }
        }
      }
    }
  }
}
