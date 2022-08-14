const create_UUID = require("../utils");
const pool = require("../db");

const addBoard = (req, res) => {
  const uuid = create_UUID();
  const { name, user_id } = req.body;
  pool.query(
    `INSERT INTO boards(
    id,
    name, 
    user_id)
    VALUES
    ($1,$2,$3)`,
    [uuid, name, user_id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const removeBoard = (req, res) => {
  pool.query(
    `DELETE FROM boards
     WHERE id = '${req.params["id"]}';`,
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getTasks = (req, res) => {
  pool.query(
    `SELECT * FROM tasks
    WHERE board_id = '${req.params["id"]}';`,
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  addBoard,
  removeBoard,
  getTasks,
};
