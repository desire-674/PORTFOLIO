import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from "./components/Education"
import Hobbies from './components/Hobbies';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <Education />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
