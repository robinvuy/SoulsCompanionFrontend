import { useState, useEffect } from 'react';
import { MOCK_BOSSES } from './data/mockBosses';
import './App.css'
import Header from './components/Header'; 
import BossCard from './components/BossCard';

export default function App() {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/bosses')
        if (!response.ok) throw new Error('Failed to fetch')
        const result = await response.json()
        setBosses(result)
      } catch (err) {
        console.log(err)
      } 
    };

    fetchData()
  }, []);

  const toggleDefeated = (id) => {
    setBosses((prevBosses) =>
      prevBosses.map((boss) =>
        boss.id === id ? { ...boss, isDefeated: !boss.isDefeated } : boss
      )
    );
  };

  return (
  <>
  
  <Header/>
  <BossCard bosses={bosses} toggleDefeated={toggleDefeated} />  
  </>  
  );
}

