import React from 'react'
import useFetch from '../useFetch';

const PutExample = () => {
    const requestOptionsPost = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "PutName",
          userName: "God_of_gods",
        }),
      };
      const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users/3", requestOptionsPost);

    console.log(data)
      if(loading) return <h2>LOADING...</h2>
      else if(error) return <h2>{error.message}</h2>

        return (
          <div>
            
          </div>
        );
        }


export default PutExample