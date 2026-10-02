const jwt = require("jsonwebtoken");
const {z} = require("zod");
const User = require("../models/User");

const signToken = (id) =>
    jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "7d"});


const registerSchema = z.object({
    name:z.string().min(2),
    email:z.string().email(),
    password:z.string().min(6),
});