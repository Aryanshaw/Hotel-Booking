import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}km from center</span>
        <span className="siTaxiOp">Free airport operation</span>
        <span className="siSubtitle">
            Studio Apartment wiht air condition
        </span>
        <span className="siFeatures">
           {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel the later of your son's funeral
        </span>
      </div>
      <div className="siDetails">
       {item.rating && <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
            <span className="siPrice">${item.cheepestPrice}</span>
            <span className="siTaxOp">including taxes and all</span>
            <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See check avaibility</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
