import axios from "axios";
import { setAuthorization } from "./general";
export function login(credentials) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/login", credentials)
      .then((response) => {
        setAuthorization(response.data.token);
        resolve(response.data);
      })
      .catch((error) => {
        reject("Credentials not match with our record.");
      });
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/logout")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject("Fail to logout.");
      });
  });
}

export function csrf() {
  return axios.get("/sanctum/csrf-cookie");
}
