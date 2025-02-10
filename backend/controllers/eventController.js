const Event = require('../models/Event');
const User = require('../models/User');

// Create Event
exports.createEvent = async (req, res) => {
  const { title, description, date, location, category, imageURL } = req.body;
  try {
    const event = new Event({
      title,
      description,
      date,
      location,
      category,
      imageURL,
      owner: req.user.id,
    });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('owner', 'name');
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('owner', 'name');
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Event
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    // Check ownership
    if (event.owner.toString() !== req.user.id)
      return res.status(403).json({ error: 'Unauthorized' });

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    // Check ownership
    if (event.owner.toString() !== req.user.id)
      return res.status(403).json({ error: 'Unauthorized' });

    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};