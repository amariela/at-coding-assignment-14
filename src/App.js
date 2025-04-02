import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DevSetup from './components/DevSetup';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App container-fluid bg-black text-white">
        <Navigation />
        <div className="row flex-column text-center">
            <Home />
            <Work />
            <Skills />
            <Resources />
            <DevSetup />
        </div>
    </div>
  );
}

export default App;
