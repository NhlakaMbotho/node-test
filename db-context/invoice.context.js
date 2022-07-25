const ServiceError = require("../models/service-error");
const Invoice = require("../models/invoice");
const init = require("../seed");

/**
 * I would've used private variables for the '_' prefixed variables if I had the time to setup experimental featues or oppotunity to use TS :)
 */
module.exports = class InvoiceDbContext {
  _invoices = null;

  static init() {
    this._invoices = init().map((invoice) => new Invoice(invoice)) || [];
  }

  static getById(id) {
    const index = this._verifyById(id);
    return this._invoices[index];
  }

  static getAll() {
    return this._invoices;
  }

  static deleteInvoice(id) {
    const index = this._verifyById(id);
    this._invoices.splice(index, 1);
    return;
  }

  static updateInvoice(id, invoiceData) {
    invoiceData.id = Number(id);
    const index = this._verifyById(invoiceData.id);
    this._invoices[index] = new Invoice(invoiceData);
  }

  static postInvoice(invoiceData) {
    invoiceData.id = Number(invoiceData.id);
    if (this._invoices.findIndex((i) => i.id === invoiceData.id) > -1) {
      throw new ServiceError(
        `Invoice with id ${invoiceData.id} already exists`,
        "ALREADY_EXISTS",
        409
      );
    }
    this._invoices.push(new Invoice(invoiceData));
    return invoiceData;
  }

  /**
   * @param {number} id
   * @returns {number} index
   */
  static _verifyById(id) {
    const index = this._invoices.findIndex((i) => i.id === Number(id));
    if (index === -1) {
      throw new ServiceError(`Invoice ${id} does not exist`, "NOT_FOUND", 404);
    }
    return index;
  }
};
