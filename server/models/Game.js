const sql = require('../acgame.js');

exports.submitScore = (body) => {
  return sql`INSERT INTO scores (name, score) VALUES (${body.name}, ${body.score});`
}

exports.retrieveScores = () => {
  return sql`SELECT * FROM scores ORDER BY score ASC LIMIT 10;`
}