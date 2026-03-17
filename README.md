# Grocery Shop E-commerce Website

A full-stack grocery e-commerce web app built with React, Vite, Express, MongoDB, and Socket.IO.

## Features

- Product browsing and detailed product pages
- Cart management with quantity updates and local persistence
- Checkout flow with order placement
- Authentication (signup and login)
- User dashboard for protected user area
- Admin panel with order management
- Real-time order updates in admin view via Socket.IO
- Responsive UI built with Tailwind CSS and Framer Motion animations

## Tech Stack

- Frontend: React, Vite, React Router, Tailwind CSS, Framer Motion
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Realtime: Socket.IO

## Project Structure

```text
.
|-- public/
|-- server/
|   |-- index.js
|   |-- models/
|   `-- routes/
|-- src/
|   |-- components/
|   |-- context/
|   |-- data/
|   `-- pages/
|-- package.json
`-- vite.config.js
```

## Prerequisites

- Node.js 18+
- npm
- MongoDB running locally or a MongoDB Atlas connection string

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/grocery-shop
```

## Installation

```bash
npm install
```

## Running the App

Run frontend and backend in separate terminals.

1. Start frontend (Vite):

```bash
npm run dev
```

2. Start backend (Express + Nodemon):

```bash
npm run server
```

Default URLs:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Available Scripts

- `npm run dev` - Start Vite frontend dev server
- `npm run server` - Start backend with nodemon
- `npm run build` - Create production frontend build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## API Endpoints

Base URL: `http://localhost:5000/api`

Auth routes:

- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Log in existing user

Order routes:

- `GET /orders` - Get all orders (admin view)
- `GET /orders/user/:email` - Get orders by user email
- `POST /orders` - Create a new order
- `PATCH /orders/:id/status` - Update order status

## Socket.IO Events

The server emits realtime events to connected clients:

- `newOrder` - Fired when a new order is created
- `orderUpdated` - Fired when an order status is updated

## Authentication and Access

- User session is stored in localStorage on the frontend
- Protected routes are used for user and admin areas
- Admin role is currently assigned automatically for `admin@grocery.com`

## Important Notes

- Passwords are currently handled in plain text in backend auth routes (demo mode).
- For production, add password hashing (for example, bcrypt), JWT/session auth, input validation, and stricter CORS policies.

## Future Improvements

- Secure authentication and password hashing
- Product, user, and inventory management in admin panel
- Payment gateway integration
- Coupon and review workflow wiring
- Unit and integration test coverage

## License

This project is for learning and development purposes.
