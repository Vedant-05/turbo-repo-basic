"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { api_to_connect } = require("@common/src/config");
const app = express();
console.log(api_to_connect, "api_to_connect");
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
