const functions = require('firebase-functions');
const express = require('express');
const { sendNotification } = require('./fcm_service');

const app = express();
app.use(express.json());

app.post('/sendNotification', async (req, res) => {
    const { deviceToken, title, body, data } = req.body;
    const result = await sendNotification(deviceToken, title, body, data);
    res.json(result);
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);