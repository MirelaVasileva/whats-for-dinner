import { useState } from "react";
import "./recipeSearch.css"
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const RecipeSearch = () => {

    const [serachList, setSearchList] = useState([])
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const res = Object.fromEntries(formData).search
        setSearchList(prev => [...prev, res])
        e?.currentTarget?.reset()
    }

    const removeSelf = (item) =>{
        const res = serachList.filter(elem => elem !== item )
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
                            <FaArrowRight color="white" size={20}/>
                            </button>
                    </form>
                    <div className="search-items">
                        {serachList.map((item, i) => 
                        <p className="item" key={item}>{item} 
                        <button onClick={()=>removeSelf(item)} className="item-remove">
                            <IoMdClose color="red" size={20}/></button>
                        </p>)}
                    </div>
                </div>

            </section>
        </div>
    )
}