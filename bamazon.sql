create database bamazon_db;
use bamazon_db;

create table products(
id integer auto_increment not null primary key,
product_name varchar(40),
department_name varchar(40),
price decimal,
stock_quantity integer
);


insert into products(product_name, department_name, price, stock_quantity)
values("slinky      ", "toys", 1, 10 ),  ("plunger", "bathroom", 2.5, 7), 
("Box of Ornaments", "Decorations", 5.75, 2), ("office Chair", "Office Supplies", 75, 1),
 ("Butter", "Groceries", 2.25, 20), ("Laptop","Office Supplies", 799, 12), ("Switch", "Toys", 250, 3), 	 ("Wreath", "Decorations", 10, 1), ("Puppy", "Love", 700, 1), ("Pomegranites", "Groceries", 2.5, 12);
select * from products;
select stock_quantity from products where id =7