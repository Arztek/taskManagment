const create_UUID = require("../utils");
const pool = require("../db");

const addUser = (req, res) => {
  const uuid = create_UUID();
  const { email, username, password, age, usage_id } = req.body;
  pool.query(
    `INSERT INTO app_users(
    id, 
    email, 
    username, 
    password, 
    age, 
    usage_id)
    VALUES
    ($1,$2,$3,$4,$5,$6)`,
    [uuid, email, username, password, age, usage_id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const removeUser = (req, res) => {
  pool.query(
    `DELETE FROM app_users
     WHERE id = '${req.params["id"]}';`,
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getBoards = (req, res) => {
  pool.query(
    `SELECT * FROM boards
    WHERE user_id = '${req.params["id"]}';`,
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  addUser,
  removeUser,
  getBoards,
};
