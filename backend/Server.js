const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// Socket.IO Setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (for development)
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joinRoom", (eventId) => {
    socket.join(eventId);
  });

  socket.on("newAttendee", (eventId) => {
    io.to(eventId).emit("updateAttendees", eventId);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start Server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));