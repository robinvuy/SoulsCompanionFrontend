import { React, useState, useEffect }from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import BossList from './BossList';


function BossDetails(req) {
   const [boss, setBoss] = useState([]);
   const [defence, setDefence] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        axios
            .get(`http://localhost:8080/bosses/${id}`)
            .then((response) => setBoss(response.data.boss))
            .then((response) => setDefence(response.data.defence))
            .catch((error) => console.log(error));
    }, [id]);
   
   
    return(
        <>
            <h1>{boss.name}</h1>
            <img src={boss.picture} />
        
        
        </>
    )
}

export default BossDetails;