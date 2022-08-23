import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const Display = (props) => {
  const [subthread, setSubThread] = useState("");
  const [listOfArticles, setListOfArticles] = useState([]);

  const url = "https://fakestoreapi.com/products";

  const red = "https://www.reddit.com/r/globaloffensive/hot.json?&limit=10";

  const getReddit = async () => {
    fetch(red, {
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setListOfArticles((data["data"]["children"])))
      .catch();
  };

  useEffect(() =>{
    getReddit()
  }, [])

  
  return (
    <div>
      {listOfArticles.length > 0 && (
        <ul>
            {listOfArticles.map((articles,idx) => (
                <li key={idx}>
                    {articles.data.title}
                </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Display;
