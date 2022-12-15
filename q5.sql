create table Employees(Employeeid int(5),Name varchar(20),Email varchar(20),Designation varchar(20));

insert into Employees(Employeeid , Name , Email , Designation ) values(100,'Rahul','rahul@example.com','Software Engineer');
insert into Employees(Employeeid , Name , Email , Designation ) values(101,'Priya','priya@example.com','Software Engineer');
insert into Employees(Employeeid , Name , Email , Designation ) values(102,'Amit','amit@example.com','Software QA Engineer');
insert into Employees(Employeeid , Name , Email , Designation ) values(103,'Jaya','jaya@example.com','Software QA Engineer');

Update Employees set Email='priya123@example.com' where Name='Priya'

Delete from Employees where Designation='Software QA Engineer'