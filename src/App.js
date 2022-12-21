import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skill';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Summery } from './components/Summary';
import { DashBoard } from './components/DashBoard';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="dashboard" element={ <DashBoard /> }></Route>
          </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <Banner />
      <Skills />
      <Summery />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
