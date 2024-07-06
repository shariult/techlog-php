-- Drop Tables
DROP TABLE users;
DROP TABLE categories;
DROP TABLE posts;
DROP TABLE reviews;

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

-- Get Table Structure
DESCRIBE users;
DESCRIBE categories;
DESCRIBE posts;
DESCRIBE reviews;

-- Get Table Data
SELECT * FROM users;
SELECT * FROM categories;
SELECT * FROM posts;
SELECT * FROM reviews;


-- Insert Data

INSERT INTO users (firstName, lastName, username, password, email, profileImage, birthDate, country, profession, about, isAdmin) VALUES
('Alice', 'Johnson', 'alicej', 'password123', 'alicej@example.com', '/img/user1.jpg', '1995-04-21', 'USA', 'Web Developer', 'Tech enthusiast and avid blogger.', false),
('Bob', 'Smith', 'bobsmith', 'securePass!89', 'bobsmith@example.com', '/img/user2.jpg', '1989-07-11', 'Canada', 'Software Engineer', 'Passionate about AI and machine learning.', false),
('Charlie', 'Brown', 'charlieb', 'charlieSecure45', 'charlieb@example.com', '/img/user3.jpg', '1998-05-30', 'UK', 'Tech Geek', 'Loves exploring new gadgets and tech trends.', false),
('Diana', 'Prince', 'dianap', 'wonderWoman77', 'dianap@example.com', '/img/user4.jpg', '1993-01-25', 'Australia', 'Tech Writer', 'Enjoys writing about cybersecurity and software.', false),
('Evan', 'Davis', 'evand', 'evanPass88', 'evand@example.com', '/img/user5.jpg', '2001-10-15', 'New Zealand', 'Tech Reviewer', 'reviews the latest tech products.', false);


INSERT INTO categories (category) VALUES
('Gadgets'),
('Hardware'),
('Software'),
('Web Development'),
('Software Development'),
('Internet'),
('AI');


INSERT INTO posts (postTitle, postBody, postImage, postTags, isFeatured, postAuthorId, postCategoryId) VALUES
('The Future of AI', 'Artificial Intelligence is transforming industries across the globe. In this post, we explore the future possibilities and ethical considerations of AI.', '/img/ai_future.jpg', 'AI, future, technology', true, 1, 7),
('Top 10 Gadgets of 2024', 'From smartwatches to foldable phones, 2024 has brought us some amazing gadgets. Here are the top 10 gadgets you need to check out.', '/img/gadgets2024.jpg', 'gadgets, technology, innovation', true, 2, 1),
('Best Practices in Software Development', 'Software development is an ever-evolving field. Discover the best practices that can help you stay ahead in the industry.', '/img/software_dev.jpg', 'software, development, best practices', false, 3, 5),
('Building Responsive Websites', 'Responsive web design is crucial in today’s multi-device world. Learn the best techniques to make your websites look great on any device.', '/img/web_dev.jpg', 'web development, responsive design, CSS', true, 4, 4),
('Hardware Trends to Watch in 2024', 'From new processors to advanced GPUs, stay updated with the latest trends in hardware for 2024.', '/img/hardware2024.jpg', 'hardware, technology, trends', false, 5, 2),
('Securing Your Internet Presence', 'As cyber threats increase, it’s important to know how to secure your online presence. Here are some tips to help you stay safe.', '/img/internet_security.jpg', 'internet, security, tips', true, 1, 6),
('The Impact of AI on Software Development', 'AI is revolutionizing software development. Explore how AI is changing the way we develop software.', '/img/ai_software_dev.jpg', 'AI, software development, technology', true, 2, 5),
('Exploring the Latest in Wearable Tech', 'Wearable technology is advancing rapidly. From smartwatches to fitness trackers, learn about the latest trends and innovations.', '/img/wearable_tech.jpg', 'wearables, gadgets, technology', false, 1, 1),
('Building a Custom PC: A Step-by-Step Guide', 'Building a custom PC can be a rewarding experience. Follow this guide to create a powerful machine tailored to your needs.', '/img/custom_pc.jpg', 'hardware, PC, building', true, 2, 2),
('Top Programming Languages to Learn in 2024', 'Stay ahead in the tech industry by learning these top programming languages. Discover their uses and why they are important.', '/img/programming_languages.jpg', 'software, programming, development', false, 3, 5),
('Designing User-Friendly Websites', 'User experience is key to a successful website. Learn how to design websites that are not only functional but also user-friendly.', '/img/user_friendly_design.jpg', 'web development, UX, design', true, 4, 4),
('The Evolution of Internet Technology', 'Internet technology has come a long way. Explore its evolution and how it continues to shape our world.', '/img/internet_evolution.jpg', 'internet, technology, history', false, 5, 6),
('How AI is Transforming Cybersecurity', 'AI is playing a crucial role in enhancing cybersecurity measures. Discover how AI helps in protecting data and preventing cyber attacks.', '/img/ai_cybersecurity.jpg', 'AI, cybersecurity, technology', true, 1, 7),
('Latest Trends in Mobile App Development', 'Mobile app development is constantly evolving. Learn about the latest trends that are shaping the future of mobile apps.', '/img/mobile_app_development.jpg', 'software development, mobile, apps', false, 2, 5),
('Understanding Quantum Computing', 'Quantum computing is set to revolutionize technology. Learn the basics and potential applications of this groundbreaking field.', '/img/quantum_computing.jpg', 'quantum computing, technology, future', true, 1, 2),
('Top 5 AI Tools for Developers', 'AI tools can greatly enhance productivity for developers. Discover the top 5 AI tools you should be using.', '/img/ai_tools.jpg', 'AI, tools, development', false, 2, 7),
('How to Optimize Your Website for SEO', 'SEO is crucial for online visibility. Follow these steps to optimize your website and improve search engine rankings.', '/img/seo_optimization.jpg', 'SEO, web development, optimization', true, 3, 6),
('Latest Advances in Machine Learning', 'Machine learning is evolving rapidly. Explore the latest advances and how they are being applied in various industries.', '/img/machine_learning.jpg', 'machine learning, AI, technology', false, 4, 7),
('Cybersecurity Best Practices for 2024', 'With increasing cyber threats, it’s essential to stay updated on the best practices for cybersecurity in 2024.', '/img/cybersecurity.jpg', 'cybersecurity, technology, tips', true, 5, 6),
('Exploring the Metaverse: What You Need to Know', 'The metaverse is a hot topic in tech. Learn what it is, why it matters, and how it could change the way we interact online.', '/img/metaverse.jpg', 'metaverse, internet, future', false, 1, 6),
('AI-Powered Web Development: The Future is Here', 'AI is transforming web development. Discover how AI-powered tools are making web development faster and more efficient.', '/img/ai_web_dev.jpg', 'AI, web development, technology', true, 2, 4);



INSERT INTO reviews (review, authorName, authorImage, reviewAuthorId, reviewPostId) VALUES
('Great insights on the future of AI! Very informative and thought-provoking.', 'Alice Johnson', '/img/user1.jpg', 1, 1),
('Loved the gadgets list! Can’t wait to get my hands on some of these.', 'Bob Smith', '/img/user2.jpg', 2, 2),
('Excellent tips for software development. This will definitely help me in my projects.', 'Charlie Brown', '/img/user3.jpg', 3, 3),
('The guide to building responsive websites was very helpful. Thanks!', 'Diana Prince', '/img/user4.jpg', 4, 4),
('Very informative post on hardware trends. Looking forward to more updates.', 'Evan Davis', '/img/user5.jpg', 5, 5),
('The internet security tips are crucial. Thanks for sharing!', 'Bob Smith', '/img/user2.jpg', 2, 6),
('AI in software development is an exciting topic. Great post!', 'Charlie Brown', '/img/user3.jpg', 3, 7),
('The insights on wearable tech are fantastic! Can’t wait to try some of these gadgets.', 'Alice Johnson', '/img/user1.jpg', 1, 8),
('This guide to building a custom PC is exactly what I needed. Thank you!', 'Bob Smith', '/img/user2.jpg', 2, 9),
('Great list of programming languages to learn. Very useful for my career.', 'Charlie Brown', '/img/user3.jpg', 3, 10),
('Designing user-friendly websites is so important. Thanks for the tips!', 'Diana Prince', '/img/user4.jpg', 4, 11),
('The article on internet technology evolution was very informative. Loved it!', 'Evan Davis', '/img/user5.jpg', 5, 12),
('AI and cybersecurity is a fascinating topic. Great read!', 'Alice Johnson', '/img/user1.jpg', 1, 13),
('The trends in mobile app development were very insightful. Looking forward to more posts like this.', 'Bob Smith', '/img/user2.jpg', 2, 14),
('Quantum computing is such a fascinating topic. Great introduction!', 'Charlie Brown', '/img/user3.jpg', 3, 15),
('The AI tools mentioned are really helpful. I will definitely try them out.', 'Diana Prince', '/img/user4.jpg', 4, 16),
('SEO tips are exactly what I needed. My website is ranking higher already!', 'Evan Davis', '/img/user5.jpg', 5, 17),
('Machine learning advances are incredible. Thanks for the detailed post!', 'Alice Johnson', '/img/user1.jpg', 1, 18),
('Cybersecurity best practices are essential. Thanks for the great advice!', 'Bob Smith', '/img/user2.jpg', 2, 19),
('The metaverse is such an interesting concept. Excited to see where it goes!', 'Charlie Brown', '/img/user3.jpg', 3, 20),
('AI-powered web development is the future. This post was very insightful.', 'Diana Prince', '/img/user4.jpg', 4, 21);





























