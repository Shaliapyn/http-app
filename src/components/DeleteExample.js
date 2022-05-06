import React from 'react'
import useFetch from '../useFetch';

const DeleteExample = () => {

  const requestOptionsDelete = {
    method: "DELETE",
    body: null
  };
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users/4", requestOptionsDelete);

  if(loading) return <h2>LOADING...</h2>
  else if(error) return <h2>{error.message}</h2>
  else {
    return (
      <div>
        <h2>{data.name}</h2>
      </div>
    )
  }
  
}

export default DeleteExample