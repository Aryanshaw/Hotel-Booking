import "./RoomData.css";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Datatable = ({ columns }) => {
  // const location = useLocation();
  // const path = location.pathname.split("");
  const [list, setList] = useState();

  const { data, loading } = useFetch(`/rooms`);

//   console.log(data)

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id, name) => {
    try {
      await axios.delete(`/rooms/${id}`);
      setList(list.filter((item) => item._id !== id));
      alert(`${name}` + " is deleted please referesh the page to see changes");
      console.log("logged");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mainC">
      <table className="mainDiv">
        <tbody>
          <tr className="heading">
            <th>Room</th>
            <th>Description</th>
            <th>Room Number</th>
            <th>Delete</th>
          </tr>
        </tbody>
        {data.map((item, _id) => {
          return (
            <>
              {loading ? (
                "loading please wait"
              ) : (
                <table id="customers">
                  {/* <tr>
                    {/* <th key={item._id}>{item._id}</th> */}
                  {/* </tr> */}
                  <tbody className="tr">
                    <tr >
                      <td className="name">{item.title}</td>
                      <td className="address">{item.desc}</td>
                      <td className="city">{item.roomNumber[0]?.number}</td>
                      <td className="deleteBtn">
                        <button
                          className="delete"
                          onClick={() => handleDelete(item._id, item.name)}
                        >
                          <FontAwesomeIcon icon={faTrash} className="logo" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </>
          );
        })}
        <Link to="/">
          <button style={{ width: "maxContent" }}>Go back to home</button>
        </Link>
      </table>
    </div>
  );
};

export default Datatable;
