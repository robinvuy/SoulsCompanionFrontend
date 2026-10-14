import { React, useState, useEffect }from 'react';
import axios from 'axios';
import BossList from '../components/BossList';

function DarkSouls1() {
   
    return (
        <>
            <h1>Dark Souls 1</h1>
            <h2>Bosses List</h2>
            <BossList/>
            
        </>
    )
}

export default DarkSouls1;