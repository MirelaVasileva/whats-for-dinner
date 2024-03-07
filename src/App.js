import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { RecipeMain } from './Components/Recipes/RecipeMain/RecipeMain.jsx';

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
