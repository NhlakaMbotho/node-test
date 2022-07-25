const express = require("express");
const bodyParser = require("body-parser");
// Implement A Swagger API Documentation Page
const invoiceRoute = require("./routes/invoice");
const documentationRoute = require("./routes/docs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/invoices", invoiceRoute);
app.use("/", documentationRoute);

app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
