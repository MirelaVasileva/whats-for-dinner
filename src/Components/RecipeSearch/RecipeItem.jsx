import './recipeItem.css'
import uniqid from 'uniqid'

export const RecipeItem = ({ recipe }) => {
    console.log(recipe.tags);
    return (
        <div className="recipe-item-container">
            <img style={{borderRadius:'8px'}} src={recipe.image} />
            <div className='recipe-info'>
                <h3 className='recipe-title'>{recipe.label}</h3>
                <ul className='health-list'>
                    {recipe.ingredientLines.slice(0,3).map(ingredient => <li>{ingredient}</li>)}
                </ul>
                <div className="diet-labels">
                {recipe.dietLabels.map((item, i) =>
                    <p className="item" key={uniqid}>{item}
                        <button  className="health-label">
                        </button>
                    </p>)}
                    </div>
            </div>
        </div>
    )

}