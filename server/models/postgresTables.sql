-- require username, password, first and last name, optional # and email
CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  username VARCHAR(80) UNIQUE not null,
  password VARCHAR(80) not null,
  firstname VARCHAR(80) not null,
  lastname VARCHAR(80) not null,
  phone_num VARCHAR(80) UNIQUE,
  email VARCHAR(80) UNIQUE,
  google_id VARCHAR(80)
);

-- amount, user id, credit card info, and we will generate date
CREATE TABLE donations (
  _id SERIAL PRIMARY KEY, 
  amount FLOAT not null,
  credit_card VARCHAR(80) not null,
  date VARCHAR(80),
  user_id INT not null,
  FOREIGN KEY(user_id) REFERENCES users(_id)
  ON DELETE SET NULL
);
