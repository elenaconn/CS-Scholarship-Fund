CREATE TABLE locations (
_id SERIAL PRIMARY KEY,
city VARCHAR(20) NOT NULL,
date VARCHAR(20) NOT NULL,
lat float not null,
long float not null,
donationsCount int not null
);


INSERT INTO locations (city, date, lat, long, donationsCount)
VALUES 
('Garden Grove', '2/8/2021', 33.770684, -117.966499, 5),
('Los Angeles', '1/1/2021', 34.042220, -118.310874, 2),
('San Diego', '1/1/2020', 32.715083, -117.135103, 10),
('New York', '1/1/2020', 40.661611, -73.934980, 1),
('Portland', '1/1/2020', 45.539867, -122.612018, 4),
('Denver', '1/1/2020', 39.754976, -104.911715, 6),
('San Francisco', '1/1/2020', 37.757310, -122.481951, 2),
('Phoenix', '1/1/2020', 33.617537, -112.072562, 3),
('Melbourne', '1/1/2020', -37.971830, 145.103397, 5)
;

SELECT * from locations;