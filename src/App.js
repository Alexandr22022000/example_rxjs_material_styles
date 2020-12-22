import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Styled from './components/Styled';
import Dynamic from './components/Dynamic';

function App() {
  return (
    <div className="App">
      <Styled />
      <Navbar />
      <Search />
      <Dynamic />
    </div>
  );
}

export default App;
