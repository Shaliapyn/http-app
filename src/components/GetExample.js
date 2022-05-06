import React from 'react';

import useFetch from '../useFetch';

const GetExample = () => {

      const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <h2>LOADING...</h2>
    else if(error) return <h2>{error.message}</h2>
    else {
      return (
        <div className="App">
          {data && (
            <ul>
              {data.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }
}

export default GetExample