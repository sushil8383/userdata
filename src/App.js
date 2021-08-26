import './styles.css';
import Post from './Component/Post';
import Pagination from './Component/Pagination';
import React, { useState, useEffect } from 'react';

const url = 'https://reqres.in/api/users?page=2';

const App=()=> {
  const [users, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting users');
      })
      .then((users) => setPosts(users.data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return(
    <div>
      {users.length > 0 ? (
        <>
          <Pagination
            data={users}
            RenderComponent={Post}
            
            pageLimit={10}
            dataLimit={3}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
    </div>
  )
}
export default App;