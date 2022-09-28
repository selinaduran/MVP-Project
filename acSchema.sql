CREATE DATABASE acgame;

CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  "name" text,
  score INT
);