import { useState } from 'react';
import './index.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Project from './component/Project/Project';
import Technology from './component/Technology/Technology';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import data from './jsonData/data.json';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={`app ${loading ? '' : 'noDisplay'}`} data-theme={isDark ? 'dark' : 'light'}>
        <Navbar handleChange={() => setIsDark(!isDark)} data={data.navbar} theme={isDark ? 'dark' : 'light'} />
        <div className="container kotakMain">
          <Header data={data.header} />
          <Project data={data.project} />
          <Technology data={data.tools} />
          <Contact data={data.contact} setLoading={setLoading} />
        </div>
        <Footer data={data.project} />
      </div>

      {!loading && (
        <div className="app loading d-flex flex-column  " data-theme={isDark ? 'dark' : 'light'}>
          Loading
        </div>
      )}
    </>
  );
}

export default App;
