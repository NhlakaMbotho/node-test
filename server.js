const express = require("express");
const bodyParser = require("body-parser");
const invoiceRoute = require("./routes/invoice");
const documentationRoute = require("./routes/docs");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/invoices", invoiceRoute);
app.use("/", documentationRoute);
app.use(errorMiddleware)

/**
 * Typically port numbers would be pulled from a config file in a real project
 */
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
