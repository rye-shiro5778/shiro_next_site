import aspida from "@aspida/fetch";
import fetch from "node-fetch";
import api from "./api/cms/$api";

const config = {
  headers: {
    "X-MICROCMS-API-KEY": process.env.CMS_API_KEY || "",
  },
  baseURL: process.env.CMS_SERVICE_DOMAIN || "",
};
// unction fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
export const client = api(
  aspida(
    fetch as unknown as (
      input: RequestInfo | URL,
      init?: RequestInit | undefined
    ) => Promise<Response>,
    config
  )
);
