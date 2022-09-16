import axios from 'axios';
import { Constants } from '../constants/constants';

export const createProduct = async (productObj) => {
  try {
    const response = await axios.post(`${Constants.baseUrl}/addProduct.php`, productObj);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${Constants.baseUrl}/getProducts.php`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteSelectedProducts = async (productObj) => {
  try {
    const response = await axios.post(
      `${Constants.baseUrl}/deleteSelectedProducts.php`,
      productObj,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
