import React, { useState } from 'react';
import '../assets/css/adminpanel.css';



const AdminPanel = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', status: 'Pending' },
    { id: 2, name: 'Jane Smith', status: 'Approved' },
    { id: 3, name: 'Sarah Lee', status: 'Rejected' }
  ]);

  const [events, setEvents] = useState(
   [ { id: 1, name: 'Youth Campaign', date: '2025-01-10' },
    { id: 2, name: 'Environmental Awareness', date: '2025-02-15' }
  ]);

  const [analytics, setAnalytics] = useState({
    totalMembers: 1500,
    newRegistrations: 120,
    activeMembers: 1300,
    eventsConducted: 20
  });

  const handleApprove = (id) => {
    setMembers(members.map(member => member.id === id ? { ...member, status: 'Approved' } : member));
  };

  const handleReject = (id) => {
    setMembers(members.map(member => member.id === id ? { ...member, status: 'Rejected' } : member));
  };

  const handleCreateEvent = (name, date) => {
    const newEvent = { id: events.length + 1, name, date };
    setEvents([...events, newEvent]);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="admin-panel">
      <header>
        <h1>Admin Panel</h1>
      </header>

      <main>
        {/* Member Management */}
        <section className="member-management">
          <h2>Member Management</h2>
          <ul>
            {members.map((member) => (
              <li key={member.id}>
                <span>{member.name} ({member.status})</span>
                {member.status === 'Pending' && (
                  <>
                    <button onClick={() => handleApprove(member.id)}>Approve</button>
                    <button onClick={() => handleReject(member.id)}>Reject</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Event Management */}
        <section className="event-management">
          <h2>Event Management</h2>
          <button onClick={() => handleCreateEvent('New Event', '2025-03-01')}>Create Event</button>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <span>{event.name} - {event.date}</span>
                <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>

        {/* Analytics Dashboard */}
        <section className="analytics-dashboard">
          <h2>Analytics Dashboard</h2>
          <div className="analytics">
            <p>Total Members: {analytics.totalMembers}</p>
            <p>New Registrations: {analytics.newRegistrations}</p>
            <p>Active Members: {analytics.activeMembers}</p>
            <p>Events Conducted: {analytics.eventsConducted}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
