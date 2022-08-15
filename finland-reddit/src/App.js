import React from 'react';
import './App.css';
import Footer from './features/Footer/Footer';
import Header from './features/Header/Header';
import Posts from './features/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Posts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
