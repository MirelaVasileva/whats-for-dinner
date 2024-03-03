import logo from './logo.svg';
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { RecipeSearch } from './Components/RecipeSearch/RecipeSearch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <RecipeSearch />
    </div>
  );
}

export default App;
