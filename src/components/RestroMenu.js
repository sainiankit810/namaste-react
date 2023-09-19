import {useState, useEffect } from "react"
import Shimmer from "./Shimmer";

const RestroMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);

    }

    if(resInfo === null) return <Shimmer />

    // const {name}= resInfo.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(name); 
    
    return(
        <div className="menu">
            <h1>Name of restaurant</h1>
            <h2>menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet food</li>
            </ul>
        </div>
    )
}

export default RestroMenu