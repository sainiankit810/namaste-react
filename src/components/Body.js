import { useState, useEffect } from "react";
import RestroCards from "./RestroCards";
import Shimmer from "./Shimmer";


const Body = () => {
    let [restroList, setResList] =  useState([]);
    let [filteredRestro, setFilteredRestro] = useState([]);

    let [searchText, setSearchText] = useState("");


    useEffect(()=> {
       fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(restroList.length === 0){
        return <Shimmer />
    }
        return (
        <div className="body">
            <div className="flex justify-between items-center ">
                <div className="mx-4 px-3 w-1/2 flex items-center">
                    <input type="text" className="border-2 border-solid border-black rounded-full m-7 w-full p-5  h-8" placeholder="search..." value={searchText} onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="bg-blue-800 text-white font-semibold  px-4 py-2 rounded-full m-4 " onClick={() => {
                        
                        // filter the restro card and update the UI's
                        let filteredRestro = restroList.filter( (res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestro(filteredRestro)
                    }}>Search</button>
                </div>

                <button className="bg-red-600 px-4 py-2  text-white font-semibold rounded-full mr-24" onClick={()=>{
                    const filteredList = restroList.filter( res => res?.info?.avgRating > 4.2);
                    
                    setResList(filteredList);
                }}
                >
                 let's filter
                </button>
            </div>

            <div className="restro-container flex flex-wrap mx-12">
                  {filteredRestro.map( (res,index) => <RestroCards key = {index} resData = {res} /> )}
            </div>

        </div>
    )
}

export default Body;