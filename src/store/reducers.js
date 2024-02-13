import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer";

// Calendar
import Calendar from "./calendar/reducer";

// Ecommerce
import Ecommerce from "./ecommerce/reducer";

// Authentication
import forgetPassword from "./auth/forgetpwd/reducer";
import login from "./auth/login/reducer";
import profile from "./auth/profile/reducer";
import account from "./auth/register/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Calendar,
  forgetPassword,
  login,
  profile,
  account,
  Ecommerce
})

export default rootReducer;
