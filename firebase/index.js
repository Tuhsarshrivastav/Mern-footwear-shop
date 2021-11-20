
var admin = require("firebase-admin");

var serviceAccount = require("../configs/services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
