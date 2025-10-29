import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();
// Using 'port' variable defined here, though PORT is defined at the end
const PORT = process.env.PORT || 5000; 

const ALLOWED_ORIGINS = [
    'https://focusflow-9lvt.onrender.com',
    'http://localhost:3000',
    'https://focusflow-1-t2by.onrender.com'
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like Postman or server-to-server calls)
        if (!origin) return callback(null, true);
        
        // Check if the origin is in our allowed list 
        // OR if it ends with a trusted deployment domain suffix
        if (
            ALLOWED_ORIGINS.includes(origin) || 
            origin.endsWith('.vercel.app') || 
            origin.endsWith('.onrender.com') 
        ) {
            return callback(null, true);
        } else {
            // ✅ FIX: Changed from single quotes to backticks (`) for template literal
            const msg = `Origin ${origin} is not allowed by the server's CORS policy.`; 
            return callback(new Error(msg), false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Added OPTIONS for full CORS support
    credentials: true 
}));


// Connect DB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Health Check Endpoint
app.get("/", (req, res) => res.send("FocusFlow API running. Status: OK"));

// --- Error Handling Middleware ---

// 💡 FIX: 404 Handler - Must come AFTER all valid routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found: The requested API endpoint does not exist." });
});

// Global Error Handler - Must come LAST
app.use((err, req, res, next) => {
    // Log the error stack in development for debugging
    if (process.env.NODE_ENV !== 'production') {
        console.error(err.stack);
    }
    // Set status code to 500 if it hasn't been set by another piece of middleware
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; 
    res.status(statusCode).json({
        message: err.message || "Server Error",
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));