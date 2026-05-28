-- Create database if it does not already exist
CREATE DATABASE IF NOT EXISTS practice;

-- Select the database
USE practice;

-- Create table named info
CREATE TABLE info (
    id INT,
    name VARCHAR(50)
);

-- Insert 5 values into the table
INSERT INTO info (id, name) VALUES
(1, 'Jack'),
(2, 'Oli'),
(3, 'Shru'),
(4, 'Nick'),
(5, 'Sam');


