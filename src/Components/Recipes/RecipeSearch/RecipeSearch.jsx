import { useContext, useEffect, useState } from "react";
import "./recipeSearch.css"
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import uniqid from 'uniqid'
import axios from "axios";
import { RecipeContext } from "../../../RecipeContext";

export const RecipeSearch = () => {

    const {setRecipes} = useContext(RecipeContext)
    const [serachList, setSearchList] = useState([])
    const [query, setQuery] = useState(null)

    useEffect(() => {
        if(serachList.length > 0){

            setQuery(serachList.join(' '))
        } 
    }, [serachList])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const res = Object.fromEntries(formData).search
        if (res && res !== '') {
            setSearchList(prev => Array.from(new Set([...prev, res])))

            e?.currentTarget?.reset()
        }
    }

    const getRecipes = async () => {
        const response = await axios.get(
            `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
        )
        setRecipes(response.data.hits);
    }

    const removeSelf = (item) => {
        const res = serachList.filter(elem => elem !== item)
        setSearchList(res)
    }


    return (
            <div id="recipe-search">
                <section className="inner-recipe">
                    <div className="search-div">
                        <form className="form" onSubmit={handleSubmit}>
                            <label>
                                add to search list
                            </label>
                            <div className="search-pair">
                            <input name="search" className="input" />
                            <button type="submit" className="arrow form-btn">
                                <FaArrowRight size={20} />
                            </button>
                            </div>
                        </form>
                        <div className="search-field">
                            <div className="search-items">
                                {serachList.map((item, i) =>
                                    <p className="item" key={uniqid}>{item}
                                        <button onClick={() => removeSelf(item)} className="item-remove">
                                            <IoMdClose size={20} /></button>
                                    </p>)}
                            </div>
                            {serachList.length !== 0  ?
                            <button onClick={() => getRecipes()} className="form-btn">
                                Search
                            </button>
                            : null
                            }   
                        </div>
                    </div>

                </section>
            </div>
    )
}