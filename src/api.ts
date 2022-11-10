import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

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
