import ENDPOINTS from "modules/api/endpoints";

const API_KEY = "2443bceb78af5fdd43992db14ed4c5bd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

class Api {
  constructor(baseUrl, endpoints, apiKey) {
    this.baseUrl = baseUrl;
    this.endpoints = endpoints;
    this.apiKey = apiKey;
  }

  async generateRequest(endpoint, options, data) {
    const { method, uri } = this.endpoints[endpoint];

    const queryString = Object.keys(options)
      .map((key) => key + "=" + options[key])
      .join("&");

    return fetch(`${this.baseUrl}${uri}?${queryString}&appid=${this.apiKey}`, {
      method,
      body: data,
    });
  }
  async fetch(endpoint, options, data) {
    const response = await this.generateRequest(endpoint, options, data);
    return response.json();
  }
}
export default new Api(BASE_URL, ENDPOINTS, API_KEY);
