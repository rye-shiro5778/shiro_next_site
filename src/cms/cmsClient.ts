import aspida from "@aspida/fetch";
import api from "./api/$api";

const config = {
  headers: {
    "X-MICROCMS-API-KEY": process.env.CMS_API_KEY || "",
  },
  baseURL: process.env.CMS_SERVICE_DOMAIN || "",
};

export const client = api(aspida(fetch, config));
