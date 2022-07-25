const customers = require("./customers.json");
const items = require("./items.json");
const invoices = require("./invoices.json");

const randomIndex = (max, min = 0) => {
  max = Math.floor(max);
  min = Math.ceil(min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getItems = () => {
  const itemCount = randomIndex(12, 1);
  const _items = [];
  for (let i = 0; i < itemCount; i++) {
    let index = randomIndex(items.length);
    _items.push({ ...items[index] });
  }
  return _items;
};

/**
 * Generates invoice data
 * @returns {[]Invoice} invoices
 */
const init = () => {
  for (const invoice of invoices) {
    invoice.customer = customers[randomIndex(customers.length - 1)];
    invoice.items = getItems();
    invoice.amount = Number(invoice.items.reduce(
      (prevValue, currentValue) => Number(currentValue.price) + prevValue,
      0
    )).toFixed(2);
  }
  return invoices;
};

module.exports = init;
