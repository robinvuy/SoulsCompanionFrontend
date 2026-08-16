<<<<<<< Updated upstream
import { useState } from 'react';
import { MOCK_BOSSES } from './data/mockBosses';
=======
import { useState, react } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Souls Boss Companion</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bosses.map((boss) => (
          <li
            key={boss.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              opacity: boss.isDefeated ? 0.5 : 1,
            }}
          >
            <h3>{boss.name} {boss.isDefeated ? '✅' : '⚔️'}</h3>
            <p><strong>Game:</strong> {boss.game}</p>
            <p><strong>Location:</strong> {boss.location}</p>
            <p><strong>Weakness:</strong> {boss.weakness}</p>
            <button onClick={() => toggleDefeated(boss.id)}>
              {boss.isDefeated ? 'Mark Unbeaten' : 'Mark Defeated'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
=======
    <>
      <section id="center">
        <Header />
        <div>
          <h1>Gwubbbbbbbba</h1>
        </div>
        <p>
          Bosses Galore
        </p> 
        <img src={reactLogo} />
        
      </section>

   
      <section id="spacer"></section>
    </>
  )
}

export default App
>>>>>>> Stashed changes
