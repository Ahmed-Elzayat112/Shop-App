const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const MONGODB_URI = process.env.MONGODB_URI;

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: "sessions",
});

module.exports = session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
});