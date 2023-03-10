import React, {useState} from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RouteS from './components/Routes';
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme?'dark':''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <RouteS/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
