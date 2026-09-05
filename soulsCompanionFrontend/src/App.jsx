import './App.css'
import Header from './components/Header'; 
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import DarkSouls1 from './components/DarkSouls1';

export default function App() {
  
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route
          path="/"
          element={<Homepage/>}
        />
        <Route 
          path="/dark-souls-1"
          element={<DarkSouls1/>}
        />

        

      </Routes>
      

    </BrowserRouter>  
  );
}

