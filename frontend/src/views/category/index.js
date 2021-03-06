import React, {useState, useEffect} from "react"
import "./style.css";
import NavBar from "../../components/NavBar"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Category = ()=>{
    let navigate = useNavigate();
    let params = useParams();
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`).then((res)=>{
            setCategories(res.data.meals)
            // console.log(res.data.meals)
        })
    }, []);

    return(
        <>
            <NavBar style="s2"/>
            <div className="category-container">
                <h1>{params.categoryId}</h1>
                <div className="category-flex" >
                    {categories.map(cat=>
                        <div onClick={()=>{navigate(`/meal/${cat.idMeal}`)}} className="caption-container"> 
                            <img  src={cat.strMealThumb}/>
                            <div className="caption">
                                <h4>{cat.strMeal}</h4>
                            </div>
                        </div>

                    )}
                </div>
                
            </div>
        </>
    )

}
export default Category;