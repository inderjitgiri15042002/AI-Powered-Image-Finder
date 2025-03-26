import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Card from "./components/Cart/Card";
import "./App.css";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchApi = async (query = "") => {
    try {
      setLoading(true);
      const res = await axios(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`
      );
      setLoading(false);
      setData(res.data.hits);
    } catch {
      console.log("Fetching the data from Api");
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  function handleClick() {
    if (query) {
      fetchApi(query);
    }
  }

  return (
    <div className="App">
      <Header query={query} onClick={handleClick} setQuery={setQuery} />
      {loading ? (
        <Loading />
      ) : (
        <div
          style={{
            width: "100vw",
          }}
        >
          {data && data.length > 0 ? <Card data={data} /> : "No Data"}
        </div>
      )}
    </div>
  );
};

export default App;

function Loading() {
  return (
    <div
      className=""
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
      }}
    >
      Loading...
    </div>
  );
}
