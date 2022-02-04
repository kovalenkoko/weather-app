export const WEATHER = "weather";
export const ONECALL = "onecall";

const ENDPOINTS = {
  [WEATHER]: {
    uri: "/weather",
    method: "GET",
  },
  [ONECALL]: {
    uri: "/onecall",
    method: "GET",
  },
};

export default ENDPOINTS;
