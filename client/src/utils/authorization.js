import axios from 'axios';

export const ensureUserAuthorized = () => {
  const hasToken = !!localStorage.token;
  const tokenNotExpired = Number(localStorage.tokenExpiresAt) > new Date().getTime();
  const isAuthorized = hasToken && tokenNotExpired;
  if (isAuthorized) {
    axios.defaults.headers.common['Authorization'] = localStorage.token;
  }
  return isAuthorized;
};

export const authorizeUser = (loginResponse) => {
  const { accessToken, Zi: { expires_at } } = loginResponse;

  localStorage.token = accessToken;
  localStorage.tokenExpiresAt = expires_at;
  axios.defaults.headers.common['Authorization'] = accessToken;
};