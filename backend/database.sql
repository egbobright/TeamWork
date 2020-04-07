DROP DATABASE IF EXISTS teamwork;

CREATE DATABASE teamwork;

CREATE TABLE employees (
  staff_id varchar(25),
	first_name varchar(45) NOT NULL,
	last_name varchar(45) NOT NULL,
	user_role varchar(35) NOT NULL,
	email varchar(25) NOT NULL,
	username varchar(25) NOT NULL,
	phone_no smallint NOT NULL,
	password varchar(25) NOT NULL,
	CONSTRAINT staff_key PRIMARY KEY (staff_id, username),
  CONSTRAINT email_unique UNIQUE (email),
  CONSTRAINT user_role_check CHECK (user_role IN ('Admin', 'Staff'))
);

CREATE TABLE articles (
	 username varchar(25) REFERENCES employees (username),
   article_id bigserial CONSTRAINT article_key PRIMARY KEY,
	 title varchar(100) NOT NULL,
	 content text NOT NULL,
	 date_created timestamp,
	 date_updated timestamp NULL,
	 date_deleted timestamp NULL,
	 time_interval interval
);

CREATE TABLE gifs (
   username varchar(25) REFERENCES employees (username),
	 gif_id bigserial CONSTRAINT gif_key PRIMARY KEY,
	 content varchar(35) NOT NULL,
	 date_created timestamp,
	 date_deleted timestamp,
	 time_interval interval
);

CREATE TABLE article_comments (
   article_id bigserial REFERENCES articles (article_id),
	 comment_id bigserial,
	 content text NOT NULL,
	 date_created timestamp,
	 date_updated timestamp NULL,
	 time_interval interval,
	 CONSTRAINT comment_id PRIMARY KEY (comment_id)
);

CREATE TABLE gif_comments (
	 gif_id integer REFERENCES gifs (gif_id),
	 comment_id bigserial,
	 content text NOT NULL,
	 date_created timestamp,
	 date_updated timestamp NULL,
	 time_interval interval,
	 CONSTRAINT comment_id PRIMARY KEY (comment_id)
);
