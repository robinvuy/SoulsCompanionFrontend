import './App.css'
import Header from './components/Header'; 
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import DarkSouls1 from './pages/DarkSouls1';
import BossDetailsPage from './pages/BossDetailsPage';

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
        <Route
        path="/dark-souls-1/bosses/:id"
        element={<BossDetailsPage/>}
        />

        

      </Routes>
      

    </BrowserRouter>  
  );
}

