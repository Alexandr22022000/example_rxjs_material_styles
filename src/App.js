import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Styled from './components/Styled';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Styled />
    </div>
  );
}

export default App;
