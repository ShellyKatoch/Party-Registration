import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from './Cookie';

function Logout(props) {
    const navigate = useNavigate();
//    useEffect(() => {
//     localStorage.removeItem('role');

//    })
 const [loading , setloading] = useState(false)
const handleLogout = () => {
  console.log("cookie deleted")
  deleteCookie("user");
  setloading(true);
   navigate('/login')
}
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;