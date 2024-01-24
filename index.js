const express = require("express");
const app = express();

const { swaggerServe, swaggerSetup } = require("./config");

app.use(express.json());

app.get("/", (res, resp) => {
    res.statusCode = 200;
    resp.send("results");
});

app.use("/api-docs", swaggerServe, swaggerSetup);

const port = process.env.PORT || 9091;

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});

module.exports = app;
