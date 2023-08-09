import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Region from './components/region/Region.jsx';
import Compare from './components/compare/Compare.jsx';
import Information from './components/information/Information.jsx';
import Questions from './components/questions/Questions.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/region' element={<Region/>}></Route>
          <Route path='/compare' element={<Compare/>}></Route>
          <Route path='/information' element={<Information/>}></Route>
          <Route path='/questions' element={<Questions/>}></Route>
        </Routes>
        <Outlet/>
      </BrowserRouter>
      <input ></input>
    </div>
  );
}

export default App;
