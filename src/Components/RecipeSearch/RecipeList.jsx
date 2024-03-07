import { RecipeItem } from "./RecipeItem"
import './recipeList.css'
import uniqid from 'uniqid'


export const RecipeList = ({recipies}) =>{
    console.log(recipies);
    return(
        <div className="recipe-container">
            {recipies.length !== 0 
            ? recipies.map(recipe => <RecipeItem key={uniqid()} recipe={recipe.recipe}/>)
            : <h1 style={{textAlign:'center', width:'100%'}}>No recipies found</h1>
        }
        </div>
    )
}