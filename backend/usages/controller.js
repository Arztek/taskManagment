const pool = require("../db");

const getUsages = (req, res) => {
  pool.query("SELECT * FROM usages", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getUsages,
};
