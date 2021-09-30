import axios from "axios";
import {} from "redux-saga/effects";
import {} from "../types";

// Login

const loginUserAPI = (loginData) => {
  console.log(loginData);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.post("api/auth", loginData, config);
};

function* loginUser(action) {}
