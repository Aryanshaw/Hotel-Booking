import React from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://secure.s.forbestravelguide.com/img/properties/loews-atlanta-hotel/loews-atlanta-hotel-new-guestroom.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/88/be/20/caption.jpg?w=300&h=300&s=1",
    "https://media-cdn.tripadvisor.com/media/photo-s/02/1c/7b/81/best-courtyard.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3h1muTMGwEO_ai3DJwXUeloIQKOTn3Cwk-BM511kDugbqir260dPwLED3JGQlc4GZYrw&usqp=CAU",
    "https://pix10.agoda.net/hotelImages/6796890/0/53f861d702d94e2ac8004328dceac0f6.jpg?ca=23&ce=0&s=1024x768",
  ];

  return (
    <div className="pList">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
