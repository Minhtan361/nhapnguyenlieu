const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Có thể thêm các Cloud Functions tại đây nếu cần
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});