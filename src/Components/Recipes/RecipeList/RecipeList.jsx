import { RecipeItem } from "../RecipeItem/RecipeItem.jsx"
import '../RecipeItem/RecipeItem.jsx'
import uniqid from 'uniqid'
import './recipeList.css'


export const RecipeList = ({recipes}) =>{
    return(
        <div className="recipe-container">
            {recipes !== null && recipes.length !== 0 
            && recipes.map(recipe => <RecipeItem key={uniqid()} recipe={recipe.recipe}/>)
            }
            
            {recipes !== null && recipes.length == 0 
                && <h1 style={{textAlign:'center', width:'100%', marginBottom:'2rem'}}>No recipes found</h1>
            }
        
        </div>
    )
}