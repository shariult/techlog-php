-- Drop Tables
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;
SET foreign_key_checks = 1;

-- Create Tables
CREATE TABLE users(
  userId INT AUTO_INCREMENT UNIQUE,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  username VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  profileImage VARCHAR(255) DEFAULT "/img/user.jpg",
  birthDate DATE,
  country VARCHAR(50),
  profession VARCHAR(50),
  about VARCHAR(255),
  isAdmin BOOLEAN DEFAULT false,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(userId)
);

CREATE TABLE categories(
  categoryId INT AUTO_INCREMENT UNIQUE,
  category VARCHAR(50) UNIQUE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(categoryId)
);

CREATE TABLE posts(
  postId INT AUTO_INCREMENT UNIQUE,
  postTitle VARCHAR(255) NOT NULL,
  postBody LONGTEXT NOT NULL,
  postImage VARCHAR(255) NOT NULL,
  postTags VARCHAR(255),
  isFeatured BOOLEAN DEFAULT false,
  postAuthorId INT NOT NULL,
  postCategoryId INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(postId),
  FOREIGN KEY(postAuthorId) REFERENCES users(userId) ON DELETE CASCADE,
  FOREIGN KEY(postCategoryId) REFERENCES categories(categoryId) ON DELETE SET NULL
);

CREATE TABLE reviews(
  reviewId INT AUTO_INCREMENT UNIQUE,
  review VARCHAR(255) NOT NULL,
  authorName VARCHAR(100) NOT NULL,
  authorImage VARCHAR(255),
  reviewAuthorId INT NOT NULL,
  reviewPostId INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(reviewId),
  FOREIGN KEY(reviewAuthorId) REFERENCES users(userId) ON DELETE CASCADE,
  FOREIGN KEY(reviewPostId) REFERENCES posts(postId) ON DELETE CASCADE
);

-- Insert Default Categories
INSERT INTO categories (category) VALUES
('Gadgets'),
('Hardware'),
('Software'),
('Web Development'),
('Software Development'),
('Internet'),
('AI');