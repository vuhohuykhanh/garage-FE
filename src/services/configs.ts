const BASE_URL = 'http://localhost:5000/api';

//accessory-type
export const GET_ALL_ACCESSORY_TYPE = `${BASE_URL}/accessory-type/get-all`;
export const CREATE_ACCESSORY_TYPE  = `${BASE_URL}/accessory-type/create`;

//account
export const SIGNIN = `${BASE_URL}/account/sign-in`;
export const SIGNUP = `${BASE_URL}/account/sign-up`;
export const GET_ALL_ACCOUNT = `${BASE_URL}/account/get-all`;
export const FORGOT_PASSWORD = `${BASE_URL}/account/forgot-password`;


//bill


//cart
export const GET_CART_BY_USER_ID = `${BASE_URL}/cart/get-cart-by-user-id`;
export const UPDATE_CART_STATUS = `${BASE_URL}/cart/update-status`;
export const UPDATE_CART = `${BASE_URL}/cart/update`;
export const DELETE_CART_MAIN = `${BASE_URL}/cart/delete`;


//cart-description
export const GET_CART_DESCRIPTION_BY_CART_ID = `${BASE_URL}/cart-description/get-cart-description-by-cart-id`;
export const ADD_CART_DESCRIPTION = `${BASE_URL}/cart-description/add`;
export const DELETE_CART_DESCRIPTION_BY_ID = `${BASE_URL}/cart-description/delete`;
export const CONFIRM_CART_DESCRIPTION_BY_ID = `${BASE_URL}/cart-description/confirm`;
export const CREATE_CART_DESCRIPTION = `${BASE_URL}/cart-description/create`;


//cart-type
export const GET_ALL_CART_TYPE = `${BASE_URL}/cart-type/get-all`;
export const CREATE_CART_TYPE  = `${BASE_URL}/cart-type/create`;


//comment
export const GET_ALL_COMMENT = `${BASE_URL}/comment/get-all`;
export const CREATE_COMMENT  = `${BASE_URL}/comment/create`;


//descriptionType
export const GET_ALL_DESCRIPTION_TYPE = `${BASE_URL}/description-type/get-all`;
export const CREATE_DESCRIPTION_TYPE  = `${BASE_URL}/description-type/create`;


//email
export const SEND_EMAIL = `${BASE_URL}/mail/send-mail`;


// manufacturer
export const GET_ALL_MANUFACTURER = `${BASE_URL}/manufacturer/get-all`;
export const CREATE_MANUFACTURER = `${BASE_URL}/manufacturer/create`;


// product
export const GET_ALL_PRODUCT = `${BASE_URL}/product/get-all`;
export const CREATE_PRODUCT = `${BASE_URL}/product/create`;
export const GET_PRODUCT_BY_MANUFACTURER = `${BASE_URL}/product/get-products-by-manufacturer`;
export const GET_PRODUCT_BY_PRODUCT_TYPE = `${BASE_URL}/product/get-products-by-product-type`;
export const GET_PRODUCT_BY_ACCESSORY_TYPE = `${BASE_URL}/product/get-products-by-accessory-type`;
export const GET_PRODUCT_BY_SERVICE_TYPE = `${BASE_URL}/product/get-products-by-service-type`;
export const GET_PRODUCT_BY_MANUFACTURER_AND_ACCESSORY_TYPE = `${BASE_URL}/product/get-products-by-manufacturer-and-accessory`;
export const GET_PRODUCT_BY_ID = `${BASE_URL}/product/get-product-by-id`;
export const UPDATE_PRODUCT_BY_ID = `${BASE_URL}/product/update`;
export const DELETE_PRODUCT_BY_ID = `${BASE_URL}/product/delete`;


// product type
export const GET_ALL_PRODUCT_TYPE = `${BASE_URL}/product-type/get-all`;
export const CREATE_PRODUCT_TYPE = `${BASE_URL}/product-type/create`;


//product-description
export const CREATE_PRODUCT_DESCRIPTION = `${BASE_URL}/product-description/create`;
export const GET_ALL_PRODUCT_DESCRIPTION = `${BASE_URL}/product-description/get-all`;
export const GET_PRODUCT_DESCRIPTION_BY_PRODUCT_ID = `${BASE_URL}/product-description/get-by-product-id`;


// role
export const GET_ALL_ROLE = `${BASE_URL}/role/get-all`;
export const CREATE_ROLE = `${BASE_URL}/role/create`;


//sale
export const GET_ALL_SALE = `${BASE_URL}/sale/get-all`;
export const CREATE_SALE = `${BASE_URL}/sale/create`;


//sale description
export const GET_ALL_SALE_DESCRIPTION = `${BASE_URL}/sale-description/get-all`;
export const CREATE_SALE_DESCRIPTION = `${BASE_URL}/sale-description/create`;


// service type
export const CREATE_SERVICE_TYPE = `${BASE_URL}/service-type/create`;
export const GET_ALL_SERVICE_TYPE = `${BASE_URL}/service-type/get-all`;


//status
export const CREATE_STATUS = `${BASE_URL}/status/create`;
export const GET_ALL_STATUS = `${BASE_URL}/status/get-all`;


//user
export const GET_ALL_USER = `${BASE_URL}/user/get-all-user`; // trang admin
export const GET_USER_INFO = `${BASE_URL}/user/get-user-info`;
export const CREATE_USER = `${BASE_URL}/user/create`;
export const UPLOAD_USER_AVATAR = `${BASE_URL}/user/upload-avatar`;
export const UPDATE_USER_INFO = `${BASE_URL}/user/update`;
export const UPDATE_PASSWORD = `${BASE_URL}/user/update-password`;
