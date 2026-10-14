import { React, useState, useEffect }from 'react';
import axios from 'axios';
import BossDetails from '../components/BossDetails';

function BossDetailsPage() {
    return(
        <>
            <h1>Boss Details</h1>
            <BossDetails/>
        </>
    )
}

export default BossDetailsPage;