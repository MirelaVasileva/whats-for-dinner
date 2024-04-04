import { useContext } from "react";
import { RecipeContext } from "../../RecipeContext";
import './wholeRecipe.css'

export const WholeRecipe = () => {
    const { recipes } = useContext(RecipeContext)
    const recipeName = window.location.pathname.split('/recipe/')[1]
    const rs = recipeName.replaceAll('%20', ' ')
    const current = recipes.filter(recipe => recipe.recipe.label === rs)[0].recipe;
    console.log(current);

    return (
        <div className="container">
            <h1>
                {current.label}
            </h1>
            <section className="image-container">
                <img className="image" src={current.image}/>
                <div className="info-container">
                    <ul>
                    <li>{current.cuisineType}</li>
                    <li>{current.dietLabels}</li>
                    <li>{current.mealType}</li>
                    <li>{Math.round(current.calories)} per serving</li>
                    <li>{current.source}</li>
                    </ul>
                    </div>
            </section>
        </div>
    )

}
