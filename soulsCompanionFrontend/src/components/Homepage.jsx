import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    


    return (
    <>
    <h1> Click to get started!</h1>
      <>
                <li key="Dark Souls 1">
                    <Link to={"/dark-souls-1"}>
                        Dark Souls 1
                    </Link>
                </li>
      </>
    </>
    )
}

export default Homepage;