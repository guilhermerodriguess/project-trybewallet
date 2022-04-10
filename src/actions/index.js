export const USER_EMAIL = 'USER_EMAIL';
export const FETCH_API = 'FETCH_API';
export const SAVE_FORM = 'SAVE_FORM';

function requestCurrencies(data) {
  return {
    type: FETCH_API,
    data,
  };
}

function saveFormAction(data, { id, value, description, currency, method, tag }) {
  return {
    type: SAVE_FORM,
    form: {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: data,
    },
  };
}

export const userAction = (email) => ({
  type: USER_EMAIL,
  email,
});

export const fetchApi = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const resolve = await fetch(url);
  const data = await resolve.json();
  dispatch(requestCurrencies(data));
};

export const saveForm = (object) => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const resolve = await fetch(url);
  const data = await resolve.json();
  dispatch(saveFormAction(data, object));
};
