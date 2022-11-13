import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import { IUploadRoomVariables } from "./types";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  withCredentials: true,
});

export const getRooms = () =>
  axiosInstance.get("/rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [urlPath, roomPk] = queryKey;
  return axiosInstance
    .get(`${urlPath}${roomPk}`)
    .then((response) => response.data);
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
  const [, roomPk] = queryKey;
  return axiosInstance
    .get(`/rooms/${roomPk}/reviews`)
    .then((response) => response.data);
};

export const getMe = async () => {
  const response = await axiosInstance.get(`/users/me/`);
  return response.data;
};

export const logOut = async () =>
  await axiosInstance
    .post(`/users/log-out/`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

/**
 * Github Login
 */
export const githubLogIn = (code: string) =>
  axiosInstance
    .post(
      `/users/github/`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);

/**
 * kakao Login
 */
export const kakaoLogIn = (code: string) =>
  axiosInstance
    .post(
      `/users/kakao/`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);

/**
 * Username login
 */
export interface IUsernameLoginVariables {
  username: string;
  password: string;
}

export interface IUsernameLoginSuccess {
  ok: string;
}

export interface IUsernameLoginError {
  error: string;
}

export const usernameLogIn = ({
  username,
  password,
}: IUsernameLoginVariables) =>
  axiosInstance
    .post(
      `/users/log-in/`,
      { username, password },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export interface IUsernameSignUpVariables {
  name: string;
  email: string;
  username: string;
  password: string;
}

export const usernameSignUp = ({
  name,
  email,
  username,
  password,
}: IUsernameSignUpVariables) =>
  axiosInstance
    .post(
      `/users/`,
      { name, email, username, password },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export const getAmenities = () =>
  axiosInstance.get(`/rooms/amenities/`).then((response) => response.data);

export const getRoomCategories = () =>
  axiosInstance.get(`/categories/rooms/`).then((response) => response.data);

export const uploadRoom = (variables: IUploadRoomVariables) =>
  axiosInstance
    .post(`/rooms/`, variables, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);
