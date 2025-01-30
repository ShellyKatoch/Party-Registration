import React, { useState } from 'react';
import '../assets/css/event.css';

const EventsPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Annual Party Conference',
      date: '2025-03-15',
      location: 'Convention Center, Capital City',
      description: 'Join us for the annual conference discussing key party policies and future directions.',
      registered: false
    },
    {
      id: 2,
      title: 'Regional Meetup - North Zone',
      date: '2025-04-05',
      location: 'Community Hall, North District',
      description: 'Regional members gathering to discuss local issues and strategies.',
      registered: false
    },
    {
      id: 3,
      title: 'Charity Fundraiser Event',
      date: '2025-05-20',
      location: 'Park Avenue, Downtown',
      description: 'Support the party’s charity initiatives by participating in this fundraiser event.',
      registered: false
    }
  ]);

  const handleRegister = (id) => {
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, registered: !event.registered } : event
    );
    setEvents(updatedEvents);
  };

  return (
    <div className="events-page">
      <header>
        <h1>Upcoming Events</h1>
      </header>

      <main>
        <section className="events-list">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <h2>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>

              <button
                className={event.registered ? 'registered' : 'register'}
                onClick={() => handleRegister(event.id)}
              >
                {event.registered ? 'Registered' : 'Register'}
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default EventsPage;
