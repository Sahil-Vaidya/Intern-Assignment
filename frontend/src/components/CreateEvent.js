import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: '',
    imageURL: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', formData);
      alert('Event created successfully!');
    } catch (err) {
      alert(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        <input type="text" placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <input type="date" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        <input type="text" placeholder="Location" onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
        <input type="text" placeholder="Category" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
        <input type="text" placeholder="Image URL" onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })} />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;