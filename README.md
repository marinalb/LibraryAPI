# 📚 Library API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows you to manage a collection of books.

## Features

- Connects to a MongoDB database using Mongoose
- CRUD operations for managing books
- Clean architecture: routes, controllers, models, and DB config separated
- Uses async/await for asynchronous operations

## 📂 Project Structure

```
.
├── config/
│   └── dbConnect.js         # MongoDB connection config
├── controllers/
│   └── bookController.js    
│   └── AuthorController.js  
logic
├── models/
│   └── Book.js              # Mongo Book schema and model
│   └── Author.js            # Mongo Author schema and model
├── routes/
│   └── booksRoutes.js       # routes for book endpoints
│   └── authorRoutes.js      # routes for author endpoints
├── app.js                   # Express app setup
├── index.js                 # Starts the server
├── server.js                # Server configs
└── .env                     # Environment variables
```

## ⚙️ Technologies

- **Node.js** v23+
- **Express** framework
- **MongoDB** (via Mongoose ODM)
- **Postman** (for testing)
- **Dotenv** (for managing environment variables)

## Getting Started

### Install dependencies

```bash
npm install
npm install dotenv
npm install mongoose
npm install nodemon 
```

### Create a `.env` file

```bash
touch .env
```

Add your MongoDB connection string inside `.env`:

```
DB_CONNECTION=mongodb+srv://<username>:<password>@cluster0.mongodb.net/library
```

### Run the server

```bash
npm dev run
```

Server will run on `http://localhost:3000` by default.

## 📬 API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /books         | List all books        |
| GET    | /books/:id     | Get book by ID        |
| POST   | /books         | Add a new book        |
| PUT    | /books/:id     | Update book by ID     |
| DELETE | /books/:id     | Delete book by ID     |

## 🧪 Testing the API

Use [Postman] or `curl` to test endpoints.

Example:

```bash
curl http://localhost:3000/books
```

## License

This project is open-source and available under the [MIT License](LICENSE).
