const ServiceError = require("../models/service-error");
const init = require("../seed");

module.exports = class InvoiceDbContext {
  _invoices = null;

  constructor() {
    this._invoices = init() || [];
  }

  getById(id) {
    const index = this._verifyById(id);
    return this._invoices[index];
  }

  getAll() {
    return this._invoices;
  }

  deleteInvoice(id) {
    const index = this._verifyById(id);
    this._invoices.pop(index);
    return;
  }

  updateInvoice(id, invoiceData) {
    const index = this._verifyById(id);
    this._invoices[index] = invoiceData;
  }

  postInvoice(invoiceData) {
    this._invoices.push(invoiceData);
  }

  /**
   * Re-usable function to check if invoice exists
   * @param {number} id
   * @returns {init} index
   */
  _verifyById(id) {
    const index = this._invoices.findIndex((i) => i.invoiceNo === id);
    if (index === -1) {
      throw new ServiceError(`Invoice ${id} does not exist`, "NOT_FOUND", 401);
    }
    return index;
  }
};
