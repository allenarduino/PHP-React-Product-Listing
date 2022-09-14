import axios from 'axios';
import { Constants } from '../constants/constants';

export const createProduct = async (productObj) => {
  const response = await axios.post(`${Constants.baseUrl}/addProduct.php`, productObj);
  return response.data;
};
