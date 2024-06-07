import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{textAlign:'center',border:'2px solid red',width:'600px',marginLeft:' auto',marginRight:'auto'}}>
      <h1>List of Users</h1>
      {
        isLoading ? <h1>Loading...</h1>:
          <ul>
            {listOfUsers.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
      }
    </div>
  );
};

export default UserList;
