import {
  GET_ALL_ACCESSORY_TYPE,
  CREATE_ACCESSORY_TYPE,
  SIGNIN,
  SIGNUP,
  GET_ALL_ACCOUNT,
  FORGOT_PASSWORD,
  GET_CART_BY_USER_ID,
  UPDATE_CART_STATUS,
  UPDATE_CART,
  DELETE_CART_MAIN,
  GET_CART_DESCRIPTION_BY_CART_ID,
  ADD_CART_DESCRIPTION,
  DELETE_CART_DESCRIPTION_BY_ID,
  CONFIRM_CART_DESCRIPTION_BY_ID,
  CREATE_CART_DESCRIPTION,
  GET_ALL_CART_TYPE,
  CREATE_CART_TYPE,
  GET_ALL_COMMENT,
  CREATE_COMMENT,
  GET_ALL_DESCRIPTION_TYPE,
  CREATE_DESCRIPTION_TYPE,
  SEND_EMAIL,
  GET_ALL_MANUFACTURER,
  CREATE_MANUFACTURER,
  GET_ALL_PRODUCT,
  CREATE_PRODUCT,
  GET_PRODUCT_BY_MANUFACTURER,
  GET_PRODUCT_BY_PRODUCT_TYPE,
  GET_PRODUCT_BY_ACCESSORY_TYPE,
  GET_PRODUCT_BY_SERVICE_TYPE,
  GET_PRODUCT_BY_ID,
  UPDATE_PRODUCT_BY_ID,
  DELETE_PRODUCT_BY_ID,
  GET_ALL_PRODUCT_TYPE,
  CREATE_PRODUCT_TYPE,
  CREATE_PRODUCT_DESCRIPTION,
  GET_ALL_PRODUCT_DESCRIPTION,
  GET_PRODUCT_DESCRIPTION_BY_PRODUCT_ID,
  GET_ALL_ROLE,
  CREATE_ROLE,
  GET_ALL_SALE,
  CREATE_SALE,
  GET_ALL_SALE_DESCRIPTION,
  CREATE_SALE_DESCRIPTION,
  CREATE_SERVICE_TYPE,
  GET_ALL_SERVICE_TYPE,
  CREATE_STATUS,
  GET_ALL_STATUS,
  GET_ALL_USER,
  GET_USER_INFO,
  CREATE_USER,
	UPLOAD_USER_AVATAR,
  UPDATE_USER_INFO,
  UPDATE_PASSWORD,
} from './configs';
import axios from 'axios';

//accessory-type
export const getAllAccessoryTypeAPI = async () => {
  try {
    const response = await axios.get(GET_ALL_ACCESSORY_TYPE);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};


//account
export const signUpAPI = async (body: any) => {
  try {
    const response = await axios.post(SIGNUP, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const loginAPI = async (body: any) => {
  try {
    const response = await axios.post(SIGNIN, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const forgotPasswordAPI = async (body: any) => {
  try {
    const response = await axios.post(FORGOT_PASSWORD, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

//bill

//cart
export const getCartByUserIdAPI = async (id: any) => {
	try {
    const response = await axios.get(`${GET_CART_BY_USER_ID}?idCardNumber=${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

// hủy cả đơn hàng
export const deleteCartByIdAPI = async (body: any) => {
	try {
    const response = await axios.delete(`${DELETE_CART_MAIN}?cartId=${body.cartId}&idUser=${body.idUser}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

//cart-description
export const createCartDescriptionAPI = async (body: any) => {
  try {
    const response = await axios.post(CREATE_CART_DESCRIPTION, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getCartDescriptionByCartIdAPI = async (id: any) => {
  try {
    const response = await axios.get(`${GET_CART_DESCRIPTION_BY_CART_ID}?cartId=${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const confirmCartDescriptionByIdAPI = async (body: any) => {
  try {
    const response = await axios.patch(CONFIRM_CART_DESCRIPTION_BY_ID, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const deleteCartDescriptionByIdAPI = async (id: string) => {
  try {
    const response = await axios.delete(`${DELETE_CART_DESCRIPTION_BY_ID}/${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

//cart-type

//comment

//descriptionType

//email
export const sendEmailAPI = async (body: any) => {
  try {
    const response = await axios.post(SEND_EMAIL, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

// manufacturer

// product
export const getAllProductAPI = async () => {
  try {
    const response = await axios.get(GET_ALL_PRODUCT);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getProductByProductTypeAPI = async (id: any) => {
  try {
    const response = await axios.get(
      `${GET_PRODUCT_BY_PRODUCT_TYPE}?productTypeId=${id}`
    );
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getProductByAccessoryTypeAPI = async (id: any) => {
  try {
    const response = await axios.get(
      `${GET_PRODUCT_BY_ACCESSORY_TYPE}?accessoryTypeId=${id}`
    );
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getProductByServiceTypeAPI = async (id: any) => {
  try {
    const response = await axios.get(
      `${GET_PRODUCT_BY_SERVICE_TYPE}?serviceTypeId=${id}`
    );
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getProductByIdAPI = async (id: any) => {
  try {
    const response = await axios.get(`${GET_PRODUCT_BY_ID}?productId=${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const updateProductByIdAPI = async (id: any) => {
  try {
    const response = await axios.get(`${UPDATE_PRODUCT_BY_ID}/${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const deleteProductByIdAPI = async (id: any) => {
  try {
    const response = await axios.delete(`${DELETE_PRODUCT_BY_ID}/${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

// product type
export const getAllProductTypeAPI = async () => {
  try {
    const response = await axios.get(GET_ALL_PRODUCT_TYPE);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

//product-description

// role

//sale

//sale description

// service type
export const getAllServiceTypeAPI = async () => {
  try {
    const response = await axios.get(GET_ALL_SERVICE_TYPE);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

//status

//user

export const getUserInfo = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(GET_USER_INFO, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const uploadAvatar = async (file: any) => {
	try{
		const response = await axios.post(UPLOAD_USER_AVATAR, {file: file}, {
			headers: {'Content-Type': 'multipart/form-data'}
		});
		return response;
	}
	catch{

	}
}

export const updatePasswordAPI = async (body: any) => {
  try {
    const response = await axios.patch(UPDATE_PASSWORD, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const updateInfoAPI = async (body: any) => {
  try {
    const response = await axios.patch(UPDATE_USER_INFO, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

//--------------------------------------------

export const deleteCardAPI = async (id: any) => {
  return [];
};

export const getCartDescriptionAPI = async (id: any) => {
  return [];
};

export const getAllServiceAPI = async () => {
  return [];
};

export const getAServiceByTypeAPI = async (id: any) => {
  return [];
};

export const getAServiceByIDAPI = async (id: any) => {
  return [];
};

export const updateServiceByIDAPI = async (id: any) => {
  return [];
};

export const deleteServiceByIDAPI = async (id: any) => {
  return [];
};

//export const deleteCardAPI = async (id: any) => {
//  try {
//    const response = await axios.delete(`${DELETE_CART_MAIN}?id=${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const confirmCartByIdAPI = async (body: any) => {
//  try {
//    const response = await axios.patch(CONFIRM_DESCRIPTION_BY_ID, body);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};
//export const getCartByIdAPI = async (id: any) => {
//  try {
//    const response = await axios.get(`${GET_CART_BY_ID}?id=${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};
//export const getCartDescriptionAPI = async (id: any) => {
//  try {
//    const response = await axios.get(`${CREATE_DESCRIPTION_BY_ID}?id=${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const getAllServiceAPI = async () => {
//  try {
//    const response = await axios.get(GET_ALL_SERVICE);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const getAServiceByTypeAPI = async (id: any) => {
//  try {
//    const response = await axios.get(
//      `${GET_SERVICE_BY_TYPE}?serviceTypeId=${id}`
//    );
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const getAServiceByIDAPI = async (id: any) => {
//  try {
//    const response = await axios.get(`${GET_SERVICE_BY_ID}?serviceId=${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const updateServiceByIDAPI = async (id: any) => {
//  try {
//    const response = await axios.patch(`${UPDATE_SERVICE_BY_ID}/${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const deleteServiceByIDAPI = async (id: any) => {
//  try {
//    const response = await axios.delete(`${DELETE_SERVICE_BY_ID}/${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};
