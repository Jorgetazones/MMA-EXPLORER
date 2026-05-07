import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Division from '../pages/Division';
import Fighter from '../pages/Fighter';
import Fighters from '../pages/Fighters';
import Rankings from '../pages/Ranking';
import NavBar from '../components/NavBar';
import Page404 from '../pages/Page404';
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='pt-16 min-h-screen max-w-7xl mx-auto px-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rankings' element={<Rankings />} />
          <Route path='/division/:divisionId' element={<Division />} />
          <Route path='/fighters' element={<Fighters />} />
          <Route path='/fighter/:fighterId' element={<Fighter />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
