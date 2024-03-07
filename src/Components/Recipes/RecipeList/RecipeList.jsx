import { RecipeItem } from "../RecipeItem/RecipeItem.jsx"
import '../RecipeItem/RecipeItem.jsx'
import uniqid from 'uniqid'


export const RecipeList = ({recipes}) =>{
    return(
        <div className="recipe-container">
            {recipes !== null && recipes.length !== 0 
            ? recipes.map(recipe => <RecipeItem key={uniqid()} recipe={recipe.recipe}/>)
            :  <h1 style={{textAlign:'center', width:'100%'}}>{recipes !== null && 'No recipes found'}</h1>
        }
        </div>
    )
}