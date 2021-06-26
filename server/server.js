const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

const products = require("./routes/api/products");
const users = require("./routes/api/users");

const app = express();

connectDB();

app.use(cors({origin: true, credentials: true}));
app.use(express.join({extended: false}));
app.get("/", (req, res) => res.send("The server is working"));
app.use("/api/products", products);
app.use("/api/users", users);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log("Server is running on port " + port));