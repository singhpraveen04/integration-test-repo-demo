"use strict";

module.exports = (app) => {
    console.log("Webhook running");
    app.post('/webhook', (req, res) => {
        console.log("Activate Webhook");
        console.log(req.body);
        res.status(200).send();
    });
};