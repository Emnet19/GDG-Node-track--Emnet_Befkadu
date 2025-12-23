const express =require("express");
const userRoutes = require("./routes/userRoutes");
const errorHandler=require("./middleware/errorHandler");

const app=express();

// Middleware

app.use(express.json());

// Routes
app.use("/users",userRoutes);

// Error Handling Middleware(must be last)
app.use(errorHandler);

module.exports =app;