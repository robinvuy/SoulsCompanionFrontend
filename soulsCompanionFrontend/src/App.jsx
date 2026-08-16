import { useState } from 'react';
import { MOCK_BOSSES } from './data/mockBosses';

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