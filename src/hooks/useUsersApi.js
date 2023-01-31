import {useQuery} from 'react-query';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log('error response');
  } finally {
  }
};

export const useUsersApi = () => useQuery('users', fetchUsers);
