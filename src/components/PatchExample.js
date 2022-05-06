import React from 'react'
import useFetch from '../useFetch';

const PatchExample = () => {
  const requestOptionsPatch = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "PatchName",
      userName: "God_of_Electricity",
    })
  };

  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users/5", requestOptionsPatch);

  console.log(data)

  if (loading) return <h2>LOADING...</h2>
  else if (error) return <h2>{error.message}</h2>
  else {
    return (
      <div>

      </div>
    )
    
  }
  
}

export default PatchExample