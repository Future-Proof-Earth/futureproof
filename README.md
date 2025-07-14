# Futureproof Project

This project consists of a React frontend (client) and an Express backend (server).

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [Yarn](https://yarnpkg.com/) (v1 or v3+)

---

## Running the Client (Frontend)

1. Open a terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. The app will be available at the URL printed in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## Running the Server (Backend)

1. Open a new terminal and navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the backend server:
   ```bash
   yarn start
   ```
   > If there is no `start` script, use:
   > ```bash
   > node server.js
   > ```
4. The backend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Project Structure

- `client/` — React + Vite frontend
- `server/` — Express backend API

---

## Notes
- The frontend expects the backend to be running on port 3000. If you change the backend port, update the API URLs in the frontend accordingly.
- You may need to set up environment variables for advanced features (see code for details).

---

## Deployment
- To build the frontend for production, run `yarn build` in the `client` directory.
- To deploy, serve the contents of `client/dist` with your preferred static file server, and run the backend as above. 