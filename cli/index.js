#!/usr/bin/env node

const { io } = require("socket.io-client");
const superagent = require("superagent")
const socket = io("http://localhost:3000");

const port = process.argv[2]

socket.on("new-request", (data) => {
    data.method = data.method.toLowerCase();
    superagent[data.method](`http://localhost:${port}${data.url}`)
        .query(data.query)
        .send(data.body)
        .end(function (err, res) {
            if (err) throw err;
            socket.emit("return-response", res.text)
        })
})

