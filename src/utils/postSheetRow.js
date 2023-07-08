import axios from 'axios';
import { CONNECTION_URL } from '../config';

export default async function postSheetRow (data) {
  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(CONNECTION_URL, data, { headers })
    return response.status;

  } catch (error) {
    throw new Error(error);
  }
}