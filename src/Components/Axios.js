import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com";

const Axios = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => setData(res.data))
  //       .catch((error) => setIsError(error.message));
  //   }, []);

  const getApiData = async (url) => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData(`${API}/posts`);
  }, []);
  return (
    <>
      <h1>Axios Examples</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="gird">
        {data.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id} className="card">
              <h3>{title.slice(0, 15).toUpperCase()}</h3>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Axios;
