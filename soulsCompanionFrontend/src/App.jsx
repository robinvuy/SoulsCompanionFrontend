import { useState, react } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './Title';

function App() {

  return (
    <>
      <section id="center">
        <Title />
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
