#!/usr/bin/env node
const URL_APP = "https://poc-ngrok-clone-production.up.railway.app"
const { io } = require("socket.io-client");
const superagent = require("superagent")
const socket = io(URL_APP);

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

console.log(`Listening request from ${URL_APP}`)
