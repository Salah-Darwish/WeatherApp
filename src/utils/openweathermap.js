import axios from "axios";

export const openweathermap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "76fdf6a2b46bc8e133d83a69062b7338",
  },
});

export const geocoding = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/",
  params: {
    appid: "76fdf6a2b46bc8e133d83a69062b7338",
  },
});
