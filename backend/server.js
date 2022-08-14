require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");

const usagesRouter = require("./routers/usages");
const usersRouter = require("./routers/users");
const boardsRouter = require("./routers/boards");
const tasksRouter = require("./routers/tasks");

const app = express();

const { authenticateToken, genToken, genTokenWithExp, verifyToken } = require("./services/jwt");

app.use(express.json()); // apply middleware to run before each callback (res => json)
app.listen(process.env.PORT, () => console.log(`its running on http://localhost:${process.env.PORT}`));

app.use("/usages", usagesRouter);
app.use("/users", usersRouter);
app.use("/boards", boardsRouter);
app.use("/tasks", tasksRouter);

app.get("/", authenticateToken, (req, res) => {
  return res.status(200).send({
    msg: "Hello",
  });
});

//testing porpouses
let refreshTokens = [];

app.post("/token", (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ err: "Unauthorized" });
  if (!refreshTokens.includes(refreshToken)) return res.status(403).json({ err: "Unauthorized" });

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) res.status(403).json({ err: "Unauthorized" });
    const accessToken = genTokenWithExp(user.username);
    res.status(200).json({ accessToken: accessToken });
  });
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  const accessToken = genTokenWithExp(username);
  const refreshToken = genToken(username);
  refreshTokens.push(refreshToken);
  res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken });
});
