const express = require("express");
const router = express.Router();
const InvoiceDbContext = require("../db-context/invoice.context");
const validators = require("../validators");

InvoiceDbContext.init();

router.get("/", (req, res, next) => {
  try {
    const invoices = InvoiceDbContext.getAll();

    res.send(invoices);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const invoice = InvoiceDbContext.getById(req.params.id);

    res.send(invoice);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    validators.validate("Invoice", req.body);

    const invoice = InvoiceDbContext.postInvoice(req.body);

    res.status(201).send(invoice);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    validators.updateValidator("Invoice", req.body);

    InvoiceDbContext.updateInvoice(req.params.id, req.body);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    InvoiceDbContext.deleteInvoice(req.params.id);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
