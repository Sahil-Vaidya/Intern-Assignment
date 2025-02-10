const express = require('express');
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public Routes
router.get('/', getEvents); // Fetch all events
router.get('/:id', getEventById); // Fetch event by ID

// Protected Routes
router.post('/', authMiddleware, createEvent); // Create a new event
router.put('/:id', authMiddleware, updateEvent); // Update an event
router.delete('/:id', authMiddleware, deleteEvent); // Delete an event

module.exports = router;