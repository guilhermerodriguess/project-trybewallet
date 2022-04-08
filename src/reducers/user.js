import { USER_EMAIL } from '../actions';

const ESTADO_INICIAL = {
  email: '',
};

const user = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
