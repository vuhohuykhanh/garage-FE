import axios from 'axios';
import {
  CONFIRM_CART_DESCRIPTION_BY_ID,
  CREATE_CART_DESCRIPTION,
  DELETE_CART_DESCRIPTION_BY_ID,
  DELETE_CART_MAIN,
  DELETE_PRODUCT_BY_ID,
  FORGOT_PASSWORD,
  GET_ALL_ACCESSORY_TYPE,
  GET_ALL_MANUFACTURER,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_TYPE,
  GET_ALL_SERVICE_TYPE,
  GET_CART_BY_USER_ID,
  GET_CART_DESCRIPTION_BY_CART_ID,
  GET_PRODUCT_BY_ACCESSORY_TYPE,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_MANUFACTURER_AND_ACCESSORY_TYPE,
  GET_PRODUCT_BY_PRODUCT_TYPE,
  GET_PRODUCT_BY_SERVICE_TYPE,
  GET_USER_INFO,
  SEND_EMAIL,
  SIGNIN,
  SIGNUP,
  UPDATE_PASSWORD,
  UPDATE_PRODUCT_BY_ID,
  UPDATE_USER_INFO,
  UPLOAD_USER_AVATAR
} from './configs';


const instance = axios.create({
  timeout: 100000,
  headers: {"ngrok-skip-browser-warning" : "true", "Access-Control-Allow-Origin": "*"}
});

//accessory-type
export const getAllAccessoryTypeAPI = async () => {
  try {
    const response = await instance.get(GET_ALL_ACCESSORY_TYPE);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};


//account
export const signUpAPI = async (body: any) => {
  try {
    const response = await instance.post(SIGNUP, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const loginAPI = async (body: any) => {
  try {
    const response = await instance.post(SIGNIN, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const forgotPasswordAPI = async (body: any) => {
  try {
    const response = await instance.post(FORGOT_PASSWORD, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

//bill

//cart
export const getCartByUserIdAPI = async (id: any) => {
	try {
    const response = await instance.get(`${GET_CART_BY_USER_ID}?idCardNumber=${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

// hủy cả đơn hàng
export const deleteCartByIdAPI = async (body: any) => {
	try {
    const response = await instance.delete(`${DELETE_CART_MAIN}?cartId=${body.cartId}&idUser=${body.idUser}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

//cart-description
export const createCartDescriptionAPI = async (body: any) => {
  try {
    const response = await instance.post(CREATE_CART_DESCRIPTION, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getCartDescriptionByCartIdAPI = async (id: any) => {
  try {
    const response = await instance.get(`${GET_CART_DESCRIPTION_BY_CART_ID}?cartId=${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const confirmCartDescriptionByIdAPI = async (body: any) => {
  try {
    const response = await instance.patch(CONFIRM_CART_DESCRIPTION_BY_ID, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const deleteCartDescriptionByIdAPI = async (id: string) => {
  try {
    const response = await instance.delete(`${DELETE_CART_DESCRIPTION_BY_ID}/${id}`);
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
    const response = await instance.post(SEND_EMAIL, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

// manufacturer
export const getAllManufacturerAPI = async () => {
  try {
    const response = await instance.get(GET_ALL_MANUFACTURER);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};


// product
export const getAllProductAPI = async () => {
  try {
    const response = await instance.get(GET_ALL_PRODUCT);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getProductByProductTypeAPI = async (id: any) => {
  try {
    const response = await instance.get(
      `${GET_PRODUCT_BY_PRODUCT_TYPE}?productTypeId=${id}`
    );
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getProductByAccessoryTypeAPI = async (id: any) => {
  try {
    const response = await instance.get(
      `${GET_PRODUCT_BY_ACCESSORY_TYPE}?accessoryTypeId=${id}`
    );
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getProductByServiceTypeAPI = async (id: any) => {
  try {
    const response = await instance.get(
      `${GET_PRODUCT_BY_SERVICE_TYPE}?serviceTypeId=${id}`
    );
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const getProductByManufacturerAndAccessoryTypeAPI = async (idAccessory: string, idManufacturer: string) => {
	try {
		let url;
		if(idManufacturer) {
			url = `${GET_PRODUCT_BY_MANUFACTURER_AND_ACCESSORY_TYPE}?accessoryId=${idAccessory}&manufacturerId=${idManufacturer}`;
		} 
		else {
			url = `${GET_PRODUCT_BY_MANUFACTURER_AND_ACCESSORY_TYPE}?accessoryId=${idAccessory}`
		}
		const response = await instance.get(url);
		return response;
	} catch (error: any) {
		return error?.response?.data || error;
	}
}

export const getProductByIdAPI = async (id: any) => {
  try {
    const response = await instance.get(`${GET_PRODUCT_BY_ID}?productId=${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const updateProductByIdAPI = async (id: any) => {
  try {
    const response = await instance.get(`${UPDATE_PRODUCT_BY_ID}/${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const deleteProductByIdAPI = async (id: any) => {
  try {
    const response = await instance.delete(`${DELETE_PRODUCT_BY_ID}/${id}`);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

// product type
export const getAllProductTypeAPI = async () => {
  try {
    const response = await instance.get(GET_ALL_PRODUCT_TYPE);
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
    const response = await instance.get(GET_ALL_SERVICE_TYPE);
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
    const response = await instance.get(GET_USER_INFO, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const uploadAvatar = async (file: any) => {
	try{
		const response = await instance.post(UPLOAD_USER_AVATAR, {file: file}, {
			headers: {'Content-Type': 'multipart/form-data'}
		});
		return response;
	}
	catch{

	}
}

export const updatePasswordAPI = async (body: any) => {
  try {
    const response = await instance.patch(UPDATE_PASSWORD, body);
    return response;
  } catch (error: any) {
    return error?.response?.data || error;
  }
};

export const updateInfoAPI = async (body: any) => {
  try {
    const response = await instance.patch(UPDATE_USER_INFO, body);
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
//    const response = await instance.delete(`${DELETE_CART_MAIN}?id=${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const confirmCartByIdAPI = async (body: any) => {
//  try {
//    const response = await instance.patch(CONFIRM_DESCRIPTION_BY_ID, body);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};
//export const getCartByIdAPI = async (id: any) => {
//  try {
//    const response = await instance.get(`${GET_CART_BY_ID}?id=${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};
//export const getCartDescriptionAPI = async (id: any) => {
//  try {
//    const response = await instance.get(`${CREATE_DESCRIPTION_BY_ID}?id=${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const getAllServiceAPI = async () => {
//  try {
//    const response = await instance.get(GET_ALL_SERVICE);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const getAServiceByTypeAPI = async (id: any) => {
//  try {
//    const response = await instance.get(
//      `${GET_SERVICE_BY_TYPE}?serviceTypeId=${id}`
//    );
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const getAServiceByIDAPI = async (id: any) => {
//  try {
//    const response = await instance.get(`${GET_SERVICE_BY_ID}?serviceId=${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const updateServiceByIDAPI = async (id: any) => {
//  try {
//    const response = await instance.patch(`${UPDATE_SERVICE_BY_ID}/${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};

//export const deleteServiceByIDAPI = async (id: any) => {
//  try {
//    const response = await instance.delete(`${DELETE_SERVICE_BY_ID}/${id}`);
//    return response;
//  } catch (error: any) {
//    return error?.response?.data || error;
//  }
//};
