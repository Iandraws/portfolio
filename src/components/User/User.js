import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const User = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('https://randomuser.me/api/');
      setUser(response.data.results[0]);
    };
    getUser();
  }, []);

  return <div>{user?.name.first}</div>;
};
