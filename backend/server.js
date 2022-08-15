require("dotenv").config();

const express = require("express");

const usagesRouter = require("./routers/usages");
const usersRouter = require("./routers/users");
const boardsRouter = require("./routers/boards");
const tasksRouter = require("./routers/tasks");
const authRouter = require("./routers/auth");

const app = express();

const { authenticateToken } = require("./services/jwt");

app.use(express.json()); // apply middleware (res => json)
app.listen(process.env.PORT, () => console.log(`its running on http://localhost:${process.env.PORT}`));

app.use("/auth", authRouter);
app.use("/usages", authenticateToken, usagesRouter);
app.use("/users", authenticateToken, usersRouter);
app.use("/boards", authenticateToken, boardsRouter);
app.use("/tasks", authenticateToken, tasksRouter);
