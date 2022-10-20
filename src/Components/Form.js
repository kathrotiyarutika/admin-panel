import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    password: "",
    email: "",
    phone: "",
  });


  const inputEvent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // const value = e.target.value;
    // const names = e.target.name;

    const { value, name } = e.target;

    setData((preVal) => {
      // console.log(preVal)
      return {
        ...preVal,
        [name]: value,
      };
      //   if (name === "fname") {
      //     return {
      //       fname: value,
      //       password: preVal.password,
      //       email: preVal.email,
      //     };
      //   } else if (name === "password") {
      //     return {
      //       fname: preVal.fname,
      //       password: value,
      //       email: preVal.email,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fname: preVal.fname,
      //       password: preVal.password,
      //       email: value,
      //     };
      //   }
    });
  };

  const handleEvent = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={handleEvent}>
          <div className="from_container">
            <h1 className="heading">Login page</h1>
            <input
              type="text"
              placeholder="Enter Your FirstName"
              onChange={inputEvent}
              value={data.fname}
              name="fname"
              required
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your LastName"
              onChange={inputEvent}
              value={data.lname}
              name="lname"
              required
            />
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={inputEvent}
              name="password"
              value={data.password}
              required
            />
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={inputEvent}
              name="email"
              value={data.email}
              required
            />
            <br />
            <input
              type="number"
              placeholder="Enter your phone no."
              onChange={inputEvent}
              name="phone"
              value={data.phone}
              required
            />
            <button type="submit" className="submit_btn">
              Click Me
            </button>
          </div>
        </form>
      </div>
      <h2>
        {data.fname} {data.lname}
      </h2>
      <br />
      <p>{data.password}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </>
  );
};

export default Form;
