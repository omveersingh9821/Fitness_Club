import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function getItem() {
  const data = localStorage.getItem("list");
  if (data) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}
const Form = () => {
  const [member, setMember] = useState(getItem());

  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("exampleInputName");
    const email = document.getElementById("exampleInputEmail1");
    const number = document.getElementById("exampleInputNumber");
    const address = document.getElementById("exampleInputAddress");
    const data = {
      name: name.value,
      email: email.value,
      number: number.value,
      address: address.value,
    };
    setMember([...member, data]);
    console.log(data);
    alert("Data Added Successfully");
    name.value = "";
    email.value = "";
    number.value = "";
    address.value = "";
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(member));
  });

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Fitness Club Registration</h1>
        <div className="form-box">
          <form className="w-50  m-auto" onSubmit={submitForm}>
            <div class="form-group mb-2">
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-2">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
              />
            </div>
            <div class="form-group mb-2">
              <input
                type="number"
                class="form-control"
                id="exampleInputNumber"
                placeholder="Phone Number"
              />
            </div>
            <div class="form-group mb-2">
              <input
                type="textarea"
                class="form-control"
                id="exampleInputAddress"
                placeholder="Address"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">
                Add Member
              </button>
            </div>
          </form>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Link to="/view-list">
            <button className="btn btn-primary">View Member List</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Form;
