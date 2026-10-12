import react from 'react';
import { React, useState, useEffect }from 'react';
import axios from 'axios';

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
                return <li key={boss.id}><a>{boss.name}</a></li>
            })}
        </ul>
    )
}

export default BossList;