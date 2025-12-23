import express from 'express';
import userRoutes from './src/routes/userRoutes';
import errorHandler from './src/middleware/errorHandler';
const app=express();

// Middleware

app.use(express.json());

// Routes
app.use("/users",userRoutes);

// Error Handling Middleware(must be last)
app.use(errorHandler);

export default app;