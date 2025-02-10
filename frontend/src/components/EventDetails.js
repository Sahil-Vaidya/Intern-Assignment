import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/api/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <p>Category: {event.category}</p>
      <img src={event.imageURL} alt={event.title} style={{ width: '300px' }} />
    </div>
  );
};

export default EventDetails;