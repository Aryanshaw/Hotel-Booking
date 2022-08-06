import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=london,berlin,madrid"
  );

  // console.log(data)
  return (
    <div className="featured">
      {loading ? (
        "Loading Please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.visitscotland.com/blog/wp-content/uploads/2018/09/AR6-768x512.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.miamiandbeaches.com/getmedia/2ea8352f-9de8-408d-8cdd-83668211dcf1/south-beach-jetty-1440x900.aspx?ext=.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Midtown_atlanta.jpg/640px-Midtown_atlanta.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
    // </div>
  );
};

export default Featured;
