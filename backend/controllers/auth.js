const jwt = require("jsonwebtoken");
const { genRefreshToken, genAccessToken } = require("../services/jwt");
const pool = require("../db");

// check credentials, return token for client
const login = (req, res) => {
  const { username, password } = req.body;
  const accessToken = genAccessToken(username);
  const refreshToken = genRefreshToken(username);

  pool
    .query(
      `SELECT * from app_users
     WHERE username = '${username}' AND password = '${password}'; `
    )
    .then((result) => {
      if (!result.rows[0]) return res.status(420).json({ err: "Invalid Credentials" });
      return result.rows[0];
    })
    .then((user) => {
      pool.query(
        `UPDATE app_users SET 
        refresh_token = '${refreshToken}'
        WHERE id = '${user.id}';`
      );
    })
    .then(() => res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken }))
    .catch((err) => console.log(err));
};

// return new Access token from client
const refresh = (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ err: "Unauthorized" });
  pool
    .query(
      `SELECT * from app_users
     WHERE refresh_token = '${refreshToken}'; `
    )
    .then((result) => {
      if (!result.rows[0]) return res.status(403).json({ err: "Unauthorized" });

      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) res.status(403).json({ err: "Unauthorized" });
        const accessToken = genAccessToken(user.username);
        res.status(200).json({ accessToken: accessToken });
      });
    });
};

module.exports = { login, refresh };
