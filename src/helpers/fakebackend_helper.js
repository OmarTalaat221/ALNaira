import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();
// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
const postFakeRegister = (data) => {
  return api.create(url.POST_FAKE_REGISTER, data)
    .catch(err => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
const postFakeLogin = data => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
const postFakeForgetPwd = data => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
const postJwtProfile = data => api.create(url.POST_EDIT_JWT_PROFILE, data);

const postFakeProfile = data => api.create(url.POST_EDIT_PROFILE, data);

// Register Method
const postJwtRegister = (url, data) => {
  return api.create(url, data)
    .catch(err => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
const postJwtLogin = data => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
const postJwtForgetPwd = data => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = data => api.create(url.SOCIAL_LOGIN, data);

// get Events
export const getEvents = () => api.get(url.GET_EVENTS);

// add Events
export const addNewEvent = event => api.create(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = event => api.update(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = event =>
  api.delete(url.DELETE_EVENT, { headers: { event } });

// get Categories
export const getCategories = () => api.get(url.GET_CATEGORIES);

//Ecommerce
// get Products
export const getProducts = () => api.get(url.GET_PRODUCTS);

// get Product detail
export const getProductDetail = id =>
  api.get(`${url.GET_PRODUCTS_DETAIL}/${id}`, { params: { id } });

// get orders
export const getOrders = () => api.get(url.GET_ORDERS);

// get cart data
export const getCartData = () => api.get(url.GET_CART_DATA);

// get customers
export const getCustomers = () => api.get(url.GET_CUSTOMERS);

// get shops
export const getShops = () => api.get(url.GET_SHOPS);

// add order
export const addNewOrder = order => api.create(url.ADD_NEW_ORDER, order);

// update order
export const updateOrder = order => api.update(url.UPDATE_ORDER, order);

// delete order
export const deleteOrder = order =>
  api.delete(url.DELETE_ORDER, { headers: { order } });

// add CUSTOMER
export const addNewCustomer = customer => api.create(url.ADD_NEW_CUSTOMER, customer);

// update CUSTOMER
export const updateCustomer = customer => api.update(url.UPDATE_CUSTOMER, customer);

// delete CUSTOMER
export const deleteCustomer = customer =>
  api.delete(url.DELETE_CUSTOMER, { headers: { customer } });

export const getProductComents = () => api.get(url.GET_PRODUCT_COMMENTS);

export const onLikeComment = (commentId, productId) => {
  return api.create(`${url.ON_LIKNE_COMMENT}/${productId}/${commentId}`, {
    params: { commentId, productId },
  });
};
export const onLikeReply = (commentId, productId, replyId) => {
  return api.create(`${url.ON_LIKNE_COMMENT}/${productId}/${commentId}/${replyId}`, {
    params: { commentId, productId, replyId },
  });
};

export const onAddReply = (commentId, productId, replyText) => {
  return api.create(`${url.ON_ADD_REPLY}/${productId}/${commentId}`, {
    params: { commentId, productId, replyText },
  });
};

export const onAddComment = (productId, commentText) => {
  return api.create(`${url.ON_ADD_COMMENT}/${productId}`, {
    params: { productId, commentText },
  });
};

export {
  getLoggedInUser,
  isUserAuthenticated,
  postFakeRegister,
  postFakeLogin,
  postFakeProfile,
  postFakeForgetPwd,
  postJwtRegister,
  postJwtLogin,
  postJwtForgetPwd,
  postJwtProfile,
};
