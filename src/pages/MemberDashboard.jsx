import React, { useState } from 'react';
import '../assets/css/dashboard.css';

const MemberDashboard = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    membershipStatus: 'Active',
    membershipType: 'Core Member',
    activityLog: [
      { date: '2025-01-15', event: 'Joined environmental campaign' },
      { date: '2025-01-10', event: 'Participated in youth outreach' },
      { date: '2025-01-05', event: 'Attended party general meeting' }
    ]
  });

  const handleEditProfile = (e) => {
    e.preventDefault();
    alert('Profile Updated!');
  };

  const handleRenewMembership = () => {
    alert('Membership Renewed!');
  };

  return (
    <div className="member-dashboard">
      <header>
        <h1>Welcome to Your Dashboard, {profile.name}</h1>
      </header>

      <main>
        <section className="profile-management">
          <h2>Profile Management</h2>
          <form onSubmit={handleEditProfile}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
            </div>

            <button type="submit">Save Changes</button>
          </form>
        </section>

        <section className="membership-status">
          <h2>Membership Status</h2>
          <p>Status: <strong>{profile.membershipStatus}</strong></p>
          <p>Membership Type: <strong>{profile.membershipType}</strong></p>
          {profile.membershipStatus === 'Expired' && (
            <button onClick={handleRenewMembership}>Renew Membership</button>
          )}
        </section>

        <section className="activity-log">
          <h2>Activity Log</h2>
          <ul>
            {profile.activityLog.map((activity, index) => (
              <li key={index}>
                <span>{activity.date}:</span> {activity.event}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MemberDashboard;
