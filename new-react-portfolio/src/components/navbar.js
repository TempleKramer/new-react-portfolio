import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/ReorderIcon";

function navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className='navbar'>
        <div className='toggleButtton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}> <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
        </div>
    </div>
  )
}

export default navbar