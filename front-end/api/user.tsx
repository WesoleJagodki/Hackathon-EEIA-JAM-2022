import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BACKEND_URL } from "./credentials";

type User = {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  gender: string;
  pin: string;
  birthdate: string;
  address: string;
};

export async function login(email: str, password: str) {
  let response = await axios.post(`${BACKEND_URL}/api/token/`, {
    username: email,
    password: password,
  });
  let body = await response.data;
  await AsyncStorage.setItem("access_token", body.access);
  await AsyncStorage.setItem("refresh_token", body.refresh);

  const config = {
    headers: { Authorization: `Bearer ${body.access}` },
  };
  response = await axios.get(`${BACKEND_URL}/api/user/`, config);
  await AsyncStorage.setItem("user", JSON.stringify(response.data));
}

export async function get_logged_user() {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    console.log(JSON.stringify(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
}
