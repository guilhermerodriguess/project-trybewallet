export const USER_EMAIL = 'USER_EMAIL';
export const FETCH_API = 'FETCH_API';

export const userAction = (email) => ({
  type: USER_EMAIL,
  email,
});

function requestCurrencies(data) {
  return {
    type: FETCH_API,
    data,
  };
}

export const fetchApi = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const resolve = await fetch(url);
  const data = await resolve.json();
  dispatch(requestCurrencies(data));
};
