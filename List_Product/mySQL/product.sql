CREATE TABLE Product (
	ID int PRIMARY KEY,
	Name VARCHAR (255),
	Price FLOAT
)
INSERT into Product VALUES ("1", "Iphone", 30000000);
INSERT into Product VALUES ("2", "SamSung", 20000000);
INSERT into Product VALUES("3", "Xiaomi", 25000000);
INSERT into Product VALUES("4", "Nokia", 10000000);
INSERT into Product VALUES("5", "LG", 35000000);
INSERT into Product VALUES("6", "HP", 15000000);

--1/ Select products which name is 'Iphone'
SELECT * FROM Product where Name = 'Iphone';

--2/ Select a list of products which price is from 15M to 30M. And order that list by ascending and descending
SELECT * FROM Product
WHERE Price >= 15000000 AND Price <= 30000000
ORDER BY Price DESC;



--3/ Search products which has 'No'
SELECT * FROM Product WHERE Name like 'No%';