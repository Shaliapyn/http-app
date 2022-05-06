import React from "react";
import useFetch from "../useFetch";

const PostExample = () => {
  const requestOptionsPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Nikola Tesla",
      userName: "God_of_Electricity",
    })
  };
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users", requestOptionsPost);

  if(loading) return <h2>LOADING...</h2>
  else if(error) return <h2>{error.message}</h2>
  else {
    return (
      <div>
        {data.name}
      </div>
    );
    }
};

export default PostExample;
