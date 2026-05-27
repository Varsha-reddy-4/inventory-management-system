# Inventory Management System

## Project Overview

The Inventory Management System is a full-stack web application developed to manage products and inventory efficiently.  
The application allows users to add, view, update, delete, search, and filter products while also highlighting low-stock items.

This project was built using React for the frontend, Node.js with Express.js for the backend, and MongoDB as the database.

---

# Features

- Add new products
- View all products
- Update product details
- Delete products
- Search products by name
- Filter products by category
- Highlight low stock products
- REST API integration
- MongoDB database connectivity
- Responsive UI using Bootstrap

---

# Tech Stack

## Frontend
- React.js
- Bootstrap
- Axios

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Tools & Editor
- VS Code
- Thunder Client / Postman
- MongoDB Compass
- Git & GitHub

---

# Project Structure

```text
inventory-management-system/

├── backend/
│   ├── controllers/
│   │   └── productController.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductForm.js
│   │   │   └── ProductList.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

# Product Schema

Each product contains:

| Field | Type |
|---|---|
| id | String |
| name | String |
| category | String |
| price | Number |
| quantity | Number |
| minStock | Number |
| createdAt | Date |

---

# API Endpoints

## Add Product
```http
POST /products
```

## Get All Products
```http
GET /products
```

## Update Product
```http
PUT /products/:id
```

## Delete Product
```http
DELETE /products/:id
```

## Get Low Stock Products
```http
GET /products/low-stock
```

---

# Setup Instructions

## Prerequisites

Make sure the following are installed:

- Node.js
- MongoDB
- VS Code

---

# Backend Setup

## Step 1
Navigate to backend folder:

```bash
cd backend
```

## Step 2
Install dependencies:

```bash
npm install
```

## Step 3
Create `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/inventorydb
PORT=5000
```

## Step 4
Run backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# Frontend Setup

## Step 1
Navigate to frontend folder:

```bash
cd frontend
```

## Step 2
Install dependencies:

```bash
npm install
```

## Step 3
Run React application:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Functionalities Implemented

- CRUD Operations
- Search by product name
- Category filtering
- Low stock detection
- Error handling
- REST API integration
- MongoDB database operations

---

# Assumptions

- MongoDB is installed and running locally
- Products are managed without authentication
- Internet connection is available for npm package installation

---

# Future Improvements

- JWT Authentication
- Pagination
- Sorting and advanced filters
- Dashboard analytics
- Product image upload
- Cloud deployment
- Docker support

---

# Screenshots

## Home Page
(Add screenshot here)

## Add Product
(Add screenshot here)

## Low Stock Highlight
(Add screenshot here)

---

# Author

Developed by Varsha

---

# Conclusion

This project demonstrates full-stack development using React, Node.js, Express.js, and MongoDB.  
It focuses on clean API design, CRUD functionality, frontend state management, and database integration.