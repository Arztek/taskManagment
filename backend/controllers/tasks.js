const create_UUID = require("../utils");
const pool = require("../db");

const addTask = (req, res) => {
  const uuid = create_UUID();
  const { name, description, board_id } = req.body;
  pool.query(
    `INSERT INTO tasks(
    id,
    name, 
    description,
    board_id)
    VALUES
    ($1,$2,$3,$4)`,
    [uuid, name, description, board_id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const removeTask = (req, res) => {
  pool.query(
    `DELETE FROM tasks
     WHERE id = '${req.params["id"]}';`,
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  addTask,
  removeTask,
};
