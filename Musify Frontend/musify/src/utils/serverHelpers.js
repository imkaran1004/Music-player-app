import { backendUrl } from "./config";
export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  const response = await fetch(backendUrl + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResponce = await response.json();
  return formattedResponce;
};

export const makeAuthenticatedPOSTRequest = async (route, body) => {
  const token=getToken();
  const response = await fetch(backendUrl + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:`Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const formattedResponce = await response.json();
  return formattedResponce;
};

export const makeAuthenticatedGETRequest = async (route) => {
  const token=getToken();
  const response = await fetch(backendUrl + route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:`Bearer ${token}`,
    },
  });
  const formattedResponce = await response.json();
  return formattedResponce;
};

const getToken =  () => {
  const accessToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
  );
  return accessToken;
};