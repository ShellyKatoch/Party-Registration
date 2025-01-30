import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from './Cookie';

function AuthGaurd(props) {

     const isAuthenticated = getCookie("user");

    
    return (
        <div>
            {isAuthenticated ? <Outlet /> : <Navigate to = "/login" />}
        </div>
    );
}

export default AuthGaurd;