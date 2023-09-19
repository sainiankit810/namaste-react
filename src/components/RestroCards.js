import { CDN_URL } from "../utils/constant";
const RestroCards = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName} = resData?.info ;

    
    return (
        <div className="m-4 p-4 w-56 bg-slate-200 hover:bg-gray-300 cursor-pointer " >
            <img  className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    )
}

export default RestroCards;