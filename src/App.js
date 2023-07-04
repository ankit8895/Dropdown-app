import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';

function App() {
  const items = ['Yes', 'Probably not'];
  return (
    <div className='App'>
      <Header />
      <HomePage items={items} />
      <Footer />
    </div>
  );
}

export default App;
