const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  // console.log("req headersssssss", req.headers);
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // console.log("Firebase user in authcheck", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};
