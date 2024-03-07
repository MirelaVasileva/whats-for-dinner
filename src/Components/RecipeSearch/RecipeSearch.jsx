import { useEffect, useState } from "react";
import "./recipeSearch.css"
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import uniqid from 'uniqid'
import axios from "axios";

export const RecipeSearch = ({setRecipies, recipies}) => {

    const [serachList, setSearchList] = useState([])
    const [query, setQuery] = useState()

    useEffect(() => {
        setQuery(serachList.join(' '))
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

    const getRecipies = async () => {
        const response = await axios.get(
            `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
        )
        setRecipies(response.data.hits);
    }
    console.log(recipies);

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
                            <input name="search" className="input" />
                            <button type="submit" className="form-btn">
                                <FaArrowRight size={20} />
                            </button>
                        </form>
                        <div className="search-field">

                            <div className="search-items">
                                {serachList.map((item, i) =>
                                    <p className="item" key={uniqid}>{item}
                                        <button onClick={() => removeSelf(item)} className="item-remove">
                                            <IoMdClose size={20} /></button>
                                    </p>)}
                            </div>
                            <button onClick={() => getRecipies()} className="form-btn">
                                Search
                            </button>
                        </div>
                    </div>

                </section>
            </div>
    )
}