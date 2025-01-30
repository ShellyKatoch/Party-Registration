import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cookie from './Cookie';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div>
         <Navbar />
           <Outlet />
           <Footer />

        </div>
    );
}

export default Layout;