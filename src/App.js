import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { RecipeMain } from './Components/Recipes/RecipeMain/RecipeMain.jsx';
import { RecipeProvider } from './RecipeContext.js';
import { WholeRecipe } from './Components/WholeRecipe/WholeRecipe.jsx';


function App() {
  return (
    <RecipeProvider>
      <div className="App">
        <Navbar/>
    <Routes>
        <Route path='/'  element={<MainPage/>} />
        <Route path='/recipe/:id' element={< WholeRecipe/>} />
    </Routes>
        
      </div>
    </RecipeProvider>
  );
}


const MainPage = () =>{
  return (
    <>
<Hero />
<RecipeMain />
    </>
  )
}

export default App;
