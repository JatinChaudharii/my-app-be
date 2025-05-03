import express from "express";

const app = express();
// Use Render's dynamic port or default to 8000 for local dev
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health-check', (req, res) => {
  res.send('Hello from HealthCheck Route!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
