const jwt = require("jsonwebtoken");

//generate token
const genRefreshToken = (username) => {
  return jwt.sign({ username: username }, process.env.REFRESH_TOKEN_SECRET);
};

//generate token with exp
const genAccessToken = (username) => {
  return jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30m" });
};

//middleware
const authenticateToken = (req, res, next) => {
  const authHearder = req.headers["authorization"];
  const token = authHearder && authHearder.split(" ")[1];
  if (!token) return res.status(401).json({ err: "Unauthorized" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ err: "Unauthorized" });
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken, genRefreshToken, genAccessToken };
