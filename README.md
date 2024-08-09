# Shop App

A simple e-commerce application built using Node.js, Express, EJS, and MongoDB.

## Features

- User authentication and management
- Product listing and management
- Shopping cart functionality
- Order processing
- Admin dashboard for managing products and orders

## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework for Node.js
- **EJS**: Embedded JavaScript templating engine
- **MongoDB**: NoSQL database for storing data
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/shop-app.git
    cd shop-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/shop
    PORT=3000
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The application will be running on `http://localhost:3000`.

## Directory Structure

- **controllers/**: Contains the route handlers for the application.
- **data/**: Contains data files or seed data (if any).
- **images/**: Stores images used in the application.
- **middleware/**: Contains middleware functions used in the application.
- **models/**: Defines the MongoDB models and schemas.
- **public/**: Contains static files like CSS, JavaScript, and images.
- **routes/**: Defines the application's routes.
- **util/**: Contains utility functions.
- **views/**: Contains EJS templates for rendering HTML.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue to discuss your proposed changes before implementing them.


