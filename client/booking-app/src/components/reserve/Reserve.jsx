import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext } from "react";
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";

const Reserve = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { date } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dates = new Date(start.getTime());

    let list = [];

    while (dates <= end) {
      list.push(new Date(dates).getTime());
      dates.setDate(dates.getDate() + 1);
    }
    return list;
  };

  const allDates = getDatesInRange(date[0]?.startDate, date[0]?.endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unvailableDates?.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(
      checked
        ? [...selectedRoom, value]
        : selectedRoom.filter((item) => item !== value)
    );
  };

  //   console.log(selectedRoom);

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRoom.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            date: allDates,
          });
          return res.date;
        }),
        );
        alert("Booking Successful!")
        setOpen(false)
    } catch (e) {}
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumber.map((roomNumber) => (
                <div className="room" key={roomNumber.number}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
