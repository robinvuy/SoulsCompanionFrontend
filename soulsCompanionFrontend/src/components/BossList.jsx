import react from 'react';
import { React, useState, useEffect }from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function BossList() {
    const [bosses, setBosses] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/bosses')
            .then((response) => setBosses(response.data))
            .catch((error) => console.log(error));
    }, []);



    return(
        <ul>
            {bosses.map((boss) => {
                return (
                <>
                    <li key={boss.id}></li>
                    <img src={boss.picture} alt={boss.name} />
                    <Link to={`/dark-souls-1/bosses/${boss.id}`}>
                        {boss.name}
                    </Link>
                </>
                )
            })}
        </ul>
    )
}

export default BossList;