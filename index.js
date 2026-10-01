const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req,res) => res.json({status:"ok"}));

mongoose
.connect(process.env.MONGO_URI)
.then(() => app.listen(process.env.PORT, () =>
 console.log(`Server is running on port ${process.env.PORT}`)))
.catch((err) => console.error(err));