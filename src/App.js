import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { RecipeMain } from './Components/RecipeSearch/RecipeMain';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <RecipeMain />
    </div>
  );
}

export default App;
