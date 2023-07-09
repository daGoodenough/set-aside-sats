import axios from 'axios';
import { CONNECTION_URL } from '../config';

export default async function postSheetRow (data) {
  console.log(data);
  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(CONNECTION_URL, data, { headers })
    console.log(response.data)
    return response.status
  } catch (error) {
    throw new Error(error);
  }
}