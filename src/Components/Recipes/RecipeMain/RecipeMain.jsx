import { useContext } from "react"
import { RecipeSearch } from "../RecipeSearch/RecipeSearch.jsx"
import { RecipeList } from "../RecipeList/RecipeList.jsx"
import './recipeMain.css'
import { RecipeContext } from "../../../RecipeContext.js"

export const RecipeMain = () =>{

    const { recipes,setRecipes } = useContext(RecipeContext)
    console.log(recipes);
    return (
        <div className="recipe-main">
            <RecipeSearch setrecipes={setRecipes} recipes={recipes}/>
            <RecipeList recipes={recipes}/>
        </div>
    )
}