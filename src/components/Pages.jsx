import React from 'react';
import AdminPanel from '../pages/AdminPanel';
import HomePage from '../pages/HomePage';
import MemberDashboard from '../pages/MemberDashboard';
import EventsPage from '../pages/EventsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/Contact';

function Pages(props) {
    return (
        <div>
            <AboutPage />
            <ContactPage />
            <AdminPanel />
            <HomePage />
              <MemberDashboard />
              <EventsPage />
        </div>
    );
}

export default Pages;