# TaskFlow Starter Structure
# TaskFlow-Starter

A task management application built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure

```
TaskFlow-Starter/
├── client/     # React frontend
├── server/     # Node/Express backend
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas connection string
- npm (comes with Node.js)

## Running the Project Locally

You'll need **two terminals** open at the same time — one for the client and one for the server.

### 1. Start the Server

Open a terminal and run:

```bash
cd server
npm install
npm run dev
```

The server will start on:

```
http://localhost:5000
```

### 2. Start the Client

Open a **second terminal** and run:

```bash
cd client
npm install
npm run dev
```

The client will start on:

```
http://localhost:5173
```

### 3. Open the App

Once both terminals are running, open your browser and go to:

```
http://localhost:5173
```

The React client will communicate with the Express server running at `http://localhost:5000`.

## Environment Variables

Make sure to create a `.env` file inside the `server` folder with the required variables, for example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

If the client needs to know the API base URL, create a `.env` file inside the `client` folder as well:

```
VITE_API_BASE_URL=http://localhost:5000
```

## Notes

- Keep both terminals running simultaneously during development — closing either one will stop that part of the app.
- The server must be running for the client to fetch or update data successfully.