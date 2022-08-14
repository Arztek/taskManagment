const express = require("express");

const usagesRouter = require("./routers/usages");
const usersRouter = require("./routers/users");
const boardsRouter = require("./routers/boards");
const tasksRouter = require("./routers/tasks");

const PORT = 8080;
const app = express();

app.use(express.json()); // apply middleware to run before each callback (res => json)
app.listen(PORT, () => console.log(`its running on http://localhost:${PORT}`));

app.get("/", (req, res) => {
  return res.status(200).send({
    msg: "Hello",
  });
});

app.use("/usages", usagesRouter);
app.use("/users", usersRouter);
app.use("/boards", boardsRouter);
app.use("/tasks", tasksRouter);
