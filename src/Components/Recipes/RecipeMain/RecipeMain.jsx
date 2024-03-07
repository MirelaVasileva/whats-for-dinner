import { useState } from "react"
import { RecipeSearch } from "../RecipeSearch/RecipeSearch.jsx"
import { RecipeList } from "../RecipeList/RecipeList.jsx"
import './recipeMain.css'

export const RecipeMain = () =>{

    const [recipes, setrecipes] = useState(null)

    return (
        <div className="recipe-main">
            <RecipeSearch setrecipes={setrecipes} recipes={recipes}/>
            <RecipeList recipes={recipes}/>
        </div>
    )
}