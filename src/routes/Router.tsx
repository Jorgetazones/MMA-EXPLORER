import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Division from '../pages/Division';
import Fighter from '../pages/Fighter';
import Fighters from '../pages/Fighters';
import Rankings from '../pages/Ranking';
import NavBar from '../components/NavBar';
import Page404 from '../pages/Page404';
import Layout from '../components/Layaout';
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rankings' element={<Rankings />} />
          <Route path='/division/:divisionId' element={<Division />} />
          <Route path='/fighters' element={<Fighters />} />
          <Route path='/fighter/:fighterId' element={<Fighter />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
