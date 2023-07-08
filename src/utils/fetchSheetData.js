import axios from 'axios';
import { CONNECTION_URL } from "../config.js";

export default async function fetchSheetData() {
  try {
    const response = await axios.get(CONNECTION_URL);
    const data_obj = {
      total_sats: response.data[0].total_sats || 0,
      entries: response.data.slice(1)
    };
    return data_obj;
  } catch (error) {
    throw new Error(error);
  }
}