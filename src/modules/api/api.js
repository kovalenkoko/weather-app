import ENDPOINTS from "modules/api/endpoints";

const API_KEY = "2443bceb78af5fdd43992db14ed4c5bd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

class Api {
  constructor(baseUrl, endpoints, apiKey) {
    this.baseUrl = baseUrl;
    this.endpoints = endpoints;
    this.apiKey = apiKey;
  }

  async generateRequest(endpoint, payload, data) {
    const { method, uri } = this.endpoints[endpoint];

    const queryString = Object.keys(payload)
      .map((key) => key + "=" + payload[key])
      .join("&");

    return fetch(`${this.baseUrl}${uri}?${queryString}&appid=${this.apiKey}`, {
      method,
      body: data,
    });
  }
  async fetch(endpoint, payload, data) {
    const response = await this.generateRequest(endpoint, payload, data);
    return response.json();
  }
}
export default new Api(BASE_URL, ENDPOINTS, API_KEY);
