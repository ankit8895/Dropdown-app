//import React
import React from 'react';
//import Header component
import Header from './components/Header';
//import Footer component
import Footer from './components/Footer';
//import HomePage
import HomePage from './Pages/HomePage';

//create react function compoment App
function App() {
  //items array for the options of dropdown
  const items = ['Yes', 'Probably not'];
  return (
    <div className='App'>
      {/* include Header component */}
      <Header />
      {/* include HomePage with items array pass it as props */}
      <HomePage items={items} />
      {/* include Footer component */}
      <Footer />
    </div>
  );
}

//export App component
export default App;
