import {
  API_GET_INFO_USER,
  API_UPDATE_INFO_USER,
  API_SIGNIN,
  API_SIGNUP,
  API_GET_ALL_DESCRIPTION,
  API_CREATE_DESCRIPTION,
  API_GET_ALL_MANUFACTURER,
  API_CREATE_MANUFACTURER,
  API_CREATE_PRODUCT,
  API_GET_ALL_PRODUCT,
  API_GET_PRODUCT_BY_ID_MANUFACTURER,
  API_GET_PRODUCT_BY_TYPE,
  API_GET_PRODUCT_BY_ID,
  API_GET_ALL_PRODUCT_TYPE,
  API_UPDATE_PRODUCT_BY_ID,
  API_DELETE_PRODUCT_BY_ID,
  API_CREATE_PRODUCT_TYPE,
  API_GET_ALL_ROLE,
  API_CREATE_ROLE,
  API_CREATE_SERVICE,
  API_GET_ALL_SERVICE,
  API_GET_SERVICE_BY_TYPE,
  API_GET_SERVICE_BY_ID,
  API_UPDATE_SERVICE_BY_ID,
  API_DELETE_SERVICE_BY_ID,
  API_GET_ALL_SERVICE_TYPE,
  API_CREATE_SERVICE_TYPE,
} from './configs';
import axios from 'axios';

export const getUserInfoV2 = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(API_GET_INFO_USER, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const loginAPI = async (body) => {
  try {
    const response = await axios.post(API_SIGNIN, body);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const getAllServiceAPI = async () => {
  try {
    const response = await axios.get(API_GET_ALL_SERVICE);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const getAllServiceTypeAPI = async () => {
  try {
    const response = await axios.get(API_GET_ALL_SERVICE_TYPE);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const getAServiceByTypeAPI = async (id) => {
  try {
    const response = await axios.get(
      `${API_GET_SERVICE_BY_TYPE}?serviceTypeId=${id}`
    );
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const getAServiceByIDAPI = async (id) => {
  try {
    const response = await axios.get(
      `${API_GET_SERVICE_BY_ID}?serviceId=${id}`
    );
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const updateServiceByIDAPI = async (id) => {
  try {
    const response = await axios.patch(`${API_UPDATE_SERVICE_BY_ID}/${id}`);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const deleteServiceByIDAPI = async (id) => {
  try {
    const response = await axios.delete(`${API_DELETE_SERVICE_BY_ID}/${id}`);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const getAllProductAPI = async () => {
  try {
    const response = await axios.get(API_GET_ALL_PRODUCT);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const updateProductByIDAPI = async (id) => {
  try {
    const response = await axios.get(`${API_UPDATE_PRODUCT_BY_ID}/${id}`);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const deleteProductByIDAPI = async (id) => {
  try {
    const response = await axios.delete(`${API_DELETE_PRODUCT_BY_ID}/${id}`);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const getAllProductTypeAPI = async () => {
  try {
    const response = await axios.get(API_GET_ALL_PRODUCT_TYPE);
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

export const getProductByTypeAPI = async (id) => {
  try {
    const response = await axios.get(
      `${API_GET_PRODUCT_BY_TYPE}?productTypeId=${id}`
    );
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};
export const getProductByIDAPI = async (id) => {
  try {
    const response = await axios.get(
      `${API_GET_PRODUCT_BY_ID}?productId=${id}`
    );
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

// const userInfov2 = new UserInfov2();
// export default userInfov2;
