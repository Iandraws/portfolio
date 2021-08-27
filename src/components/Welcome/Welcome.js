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

function randomBoolean() {
  return Math.random() < 0.5;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateUsers(count) {
  console.log('Generating');
  let users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      id: i + 1,
      name: {
        first: 'Name ' + i + 1,
        last: 'Name ' + i + 1,
      },
      email: 'Name_' + i + 1 + '@gmail.com',
      gender: randomBoolean() ? 'Male' : 'Female',
      dob: {
        age: i * 2 + 1,
      },
      color: getRandomColor(),
      active: true,
    });
  }

  return users;
}
