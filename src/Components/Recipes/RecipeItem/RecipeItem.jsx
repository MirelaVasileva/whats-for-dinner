import { useEffect, useState } from 'react'
import './recipeItem.css'
import uniqid from 'uniqid'

export const RecipeItem = ({ recipe }) => {

    return (
        <div className="recipe-item-container">
            <img src={recipe.image} />
            <div className='recipe-info'>
                <h3 className='recipe-title'>{recipe.label}</h3>
                <div className="diet-labels">
                    {recipe.dietLabels.map((item, i) =>
                        <p className="diet-p" key={uniqid}>{item}

                        </p>)}
                </div>
                <IngredientList ingredients={recipe.ingredientLines} />
                <button className='see-recipe-btn'>See recipe</button>
            </div>
        </div>
    )

}
const IngredientList = ({ ingredients }) => {

    const [ingredientList,setIngredientList] =useState(ingredients)
    const [readMore, setReadMore] = useState(false)
   
    useEffect(()=>{
        if(!readMore){
            setIngredientList(ingredientList.slice(0,3))
        }else{
            setIngredientList(ingredients)
        }
    },[readMore])

    return (
        <ul className='health-list'>
            {ingredientList.map(ingredient => <li>{ingredient}</li>)}
            {ingredients.length > 3 && <button className='read-more' 
            onClick={() => setReadMore(!readMore)}>
                {readMore ? 'Read less' : 'Read more...'}
            </button>}
        </ul>
    );
}