-- require username, password, first and last name, optional # and email
CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  username VARCHAR(80) UNIQUE not null,
  password VARCHAR(80) not null,
  firstname VARCHAR(80) not null,
  lastname VARCHAR(80) not null,
  phone_num INT UNIQUE,
  email VARCHAR(80) UNIQUE
);

-- amount, user id, credit card info, and we will generate date
CREATE TABLE donations (
    _id SERIAL PRIMARY KEY, 
    amount FLOAT not null,
    credit_card INT not null,
    date DATE,
    user_id INT not null,
    FOREIGN KEY(user_id) REFERENCES users(_id)
    ON DELETE SET NULL
);
