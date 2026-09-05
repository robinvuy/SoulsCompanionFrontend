import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    const games = [
            "Dark Souls 1",
             "Dark Souls 2",
             "Dark Souls 3",
             "Bloodborne",
             "Elden Ring"
          ];


    return (
      <>
        <ul>
            {games.map((game) => (
                <li key = {game}>
                    <Link to={`/${game.toLowerCase().replaceAll(" ", "-")}`}>
                        {game}
                    </Link>
                </li>
            ))}
        </ul>
      </>
    )
}

export default Homepage;