import './App.css';
import Footer from './features/Footer/Footer';
import Header from './features/Header/Header';
import Body from './features/Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
