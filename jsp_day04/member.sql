create database app;

use app;

create table tbl_member(
	member_id int unsigned auto_increment primary key,
	member_identification varchar(500) unique not null,
	member_password varchar(500) not null,
	member_name varchar(500) not null,
	member_age tinyint,
	member_gender varchar(50) default '선택안함',
	member_email varchar(500),
	member_zipcode varchar(10),
	member_address varchar(500),
	member_address_detail varchar(500)
);










