const path = require("path");
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const multer = require("multer");

const errorController = require("./controllers/error");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

const MONGODB_URI = process.env.MONGODB_URI;

const sessionMiddleware = require("./middleware/session");
const csrfMiddleware = require("./middleware/csrf");
const flashMiddleware = require("./middleware/flash");
const userMiddleware = require("./middleware/user");
const errorMiddleware = require("./middleware/error");

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") +
                "-" +
                file.originalname
        );
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(sessionMiddleware);
app.use(csrfMiddleware);
app.use(flashMiddleware);

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use(userMiddleware);

// Routes middleware
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

// Error handling routes
app.get("/500", errorController.get500);
app.use(errorController.get404);

// Error handling middleware
app.use(errorMiddleware);

mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        console.log("connected");
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
