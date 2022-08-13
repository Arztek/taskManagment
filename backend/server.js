const express = require("express");
const usagesRoutes = require("./usages/routes");

const PORT = 8080;
const app = express();

app.use(express.json()); // apply middleware to run before each callback (body =>json)
app.listen(PORT, () => console.log(`its running on http://localhost:${PORT}`));

app.get("/test", (req, res) => {
  return res.status(200).send({
    msg: "Hello",
  });
});

app.use("/usages", usagesRoutes);
