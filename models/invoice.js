module.exports = class Invoice {
  constructor(dynamicInvoiceData) {
    this.id = dynamicInvoiceData.id;
    this.dateTime = dynamicInvoiceData.dateTime;
    this.amount = dynamicInvoiceData.amount;
    this.creditCardType = dynamicInvoiceData.creditCardType;
    this.cardNumber = dynamicInvoiceData.cardNumber;
    this.currency = dynamicInvoiceData.currency;
    this.refNumber = dynamicInvoiceData.refNumber;
    this.customer = {
      id: dynamicInvoiceData.customer.id,
      firstName: dynamicInvoiceData.customer.firstName,
      lastName: dynamicInvoiceData.customer.lastName,
      email: dynamicInvoiceData.customer.email
    };
    this.items = dynamicInvoiceData.items.map((item) => {
      return {
        category: item.category,
        name: item.name,
        price: item.price,
        code: item.code
      };
    });
  }
};
