const express = require("express");
const router = express.Router();
const InvoiceDbContext = require("../db-context/invoice.context");

const invoiceBbContext = new InvoiceDbContext();

router.get("/", (req, res, next) => {
  try {
    const invoices = invoiceBbContext.getAll();

    res.send(invoices);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const invoice = invoiceBbContext.getById(req.params.id);

    res.send(invoice);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    const invoices = invoiceBbContext.getAll();
    res.send(invoices);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedInvoice = await invoiceBbContext.updateInvoice(req.params.id);

    res.send(updatedInvoice).status(201);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await invoiceBbContext.updateInvoice(req.params.id);

    res.status(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
