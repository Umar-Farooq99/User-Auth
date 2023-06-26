# User Authentication system

User Authentication system using (jwt) in which user can signUp and signIn user either a enduser or admin all routes are private due to auth system after signup and login user can write blog and all CURD operation on the the blog

## Tech Stack

**Client:** Thunder Client

**Server:** Language: Node version 18.16.0, Framework: Express.js

**Database:** Postgres Squelize version 11.20

## Installation

Install my-project with npm

````bash
  npm install express
  npm install -D nodemon
  npm install  jsonwebtoken
  npm install  express-validator
  npm install squelize-cli
  npm install bcrypt
  npm install dotenv
  npm install pg
  npm install pg hstore


## USER API

#### post register

```http
   localhost:5000/user/api/register
````

| Parameter  | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `register` | `string` | **Required**. returns a register user |

#### POST login user

```http
  localhost:5000/user/api/login
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `login`   | `string` | **Required**. returns token to user |

#### GET current

```http
  localhost:5000/user/api/current
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `current` | `string` | **Required**. returns currently login user |

## BLOG API

#### post blog

```http
   localhost:5000/blog/api
```

| path  | Type     | Description                       |
| :---- | :------- | :-------------------------------- |
| `"/"` | `string` | **Required**. returns posted blog |

#### GET all blog

```http
  localhost:5000/blog/api/all
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `all  `   | `string` | **Required**. returns all list of blogs |

GET blog by ID

```http
  localhost:5000/blog/api/id
```

| Parameter | Type      | Description                                |
| :-------- | :-------- | :----------------------------------------- |
| `id`      | `integer` | **Required**. returns currently login user |

Delete blog by ID

```http
  localhost:5000/blog/api/id
```

| Parameter | Type      | Description                     |
| :-------- | :-------- | :------------------------------ |
| `id`      | `integer` | **Required**. Delete blog by id |

update blog by ID

```http
  localhost:5000/blog/api/id
```

| Parameter | Type      | Description                              |
| :-------- | :-------- | :--------------------------------------- |
| `id`      | `integer` | **Required**. update existing blog by id |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ACCESS-TOKEN-SECRET-KEY`

`PORT`

## Features

- User Creation: The system allows for the creation of user accounts. Users can register by providing their necessary details, such as username, email, and password.
- Associations Between Users and Blogs: The system establishes associations between users and their respective blogs. Each blog is associated with the user who created it, allowing for personalized blog management
- Authentication Management with JWT Token: To ensure secure user authentication, the system implements authentication management using JSON Web Tokens (JWT). Users are authenticated upon login, and subsequent requests are validated using the generated JWT tokens.

- Password Encryption: To enhance security, the system encrypts user passwords using a secure encryption algorithm. This ensures that passwords are stored safely and cannot be easily compromised.

- Use Migrations, Avoid Sync True: The system employs database migrations for managing database schema changes and updates. It avoids using the "sync true" approach, which can potentially cause data inconsistencies and conflicts.

## Running Tests

To run tests, run the following command

```bash
  npm run dev
```

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

During the development of this project i Learned how to develope authentication system using jwt with Encrypted password.

I learn squelize-cli migration to aviod sync with table associations

I learn Use of thunder client to check api efficiently...

I learn role creation in authentication system

I learn validation for check different input on thier standards
