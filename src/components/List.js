import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("list"));
    setItem(data);
  }, []);

  const deleteList = (index) => {
    const data = JSON.parse(localStorage.getItem("list"));
    data.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(data));
    setItem(data);
  };
  return (
    <div className="container  text-center mt-5 w-75">
      <h1 className="text-center">Member List</h1>
      <div>
        <table className="table ">
          <thead className="fs-4  bg-primary">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address</th>
              <th>Delete</th>
            </tr>
          </thead>
          {setItem != null ? (
            <tbody className="text-white fs-5 mt-5">
              {item.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.address}</td>

                    <td>
                      <button
                        onClick={() => deleteList(index)}
                        className="btn btn-danger  "
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            "No Data Found"
          )}
        </table>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-primary ">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default List;
