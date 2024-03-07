import { useState } from "react"
import { RecipeSearch } from "./RecipeSearch"
import { RecipeList } from "./RecipeList"
import './recipeMain.css'

export const RecipeMain = () =>{

    const [recipies, setRecipies] = useState([])

    return (
        <div className="recipe-main">
            <RecipeSearch setRecipies={setRecipies} recipies={recipies}/>
            <RecipeList recipies={recipies}/>
        </div>
    )
}