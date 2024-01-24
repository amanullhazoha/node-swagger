const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

const { swaggerServe, swaggerSetup } = require("./config");

app.use(express.json());

app.get("/", (res, resp) => {
    res.statusCode = 200;
    res.send("results");
});

app.use("/api-docs", swaggerServe, swaggerSetup);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});

module.exports = app;
