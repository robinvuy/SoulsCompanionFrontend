import { useState } from 'react';
import { MOCK_BOSSES } from './data/mockBosses';
import './App.css'
import Header from './components/Header';
import BossCard from './components/BossCard';

export default function App() {
  const [bosses, setBosses] = useState(MOCK_BOSSES);

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

