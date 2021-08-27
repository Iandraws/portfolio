import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './Welcome.scss';

export const Welcome = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://randomuser.me/api/?results=5');
      setUsers(response.data.results);
    };
    getUsers();
  }, []);

  return (
    <div className='users-wrapper'>
      {users.map((user, index) => {
        return (
          <div
            key={index}
            className='user-wrapper'
            style={{
              backgroundColor: user.color,
              backgroundImage: 'url(' + user.picture.large + ')',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          >
            <div
              className='name'
              onClick={() => history.push('/users/' + user.id.value)}
            >
              {user.name.first} {user.name.last}
            </div>
            ;<div className='email'>Email: {user.email}</div>;
            <div
              className={
                'gender ' + (user.gender === 'Male' ? 'male' : 'female')
              }
            >
              Gender: {user.gender}
            </div>
            ;<div className='age'>Age: {user.dob.age}</div>;
          </div>
        );
      })}
    </div>
  );
};
