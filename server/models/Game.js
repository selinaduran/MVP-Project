const sql = require('../acgame.js');

exports.submitScore = (body) => {
  return sql`INSERT INTO scores (name, score) VALUES (${body.name}, ${body.score});`
}