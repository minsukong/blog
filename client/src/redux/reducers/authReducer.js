import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: nullm,
  isLoading: false,
  user: "",
  userId: "",
  userName: "",
  userRole: "",
  errorMsg: "",
  successMsg: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userId: action.payload.user.id,
        userRole: action.payload.user.role,
        errorMsg: "",
      };
    case LOGIN_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userId: null,
        userRole: null,
        isAuthenticated: false,
        isLoading: false,
        errorMsg: action.payload.data.msg,
      };
    case CLEAR_ERROR_REQUEST:
      return {
        ...state,
        errorMsg: "",
      };
    case CLEAR_ERROR_SUCCESS:
      return {
        ...state,
        errorMsg: "",
      };
    case CLEAR_ERROR_FAILURE:
      return {
        ...state,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default authReducer;
