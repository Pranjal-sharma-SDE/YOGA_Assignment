
import { SAVE_USER } from './types';
import { COMPLETE_PAYMENT } from './types';

function userReducer(state = {}, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        name: action.name,
        email: action.email,
        age: action.age,
        batch: action.batch
      };
    default:
      return state;
  }
}



export function saveUser(name, email, age, batch) {
  return (dispatch) => {
    dispatch({
      type: SAVE_USER,
      name,
      email,
      age,
      batch
    });
  }
}



export function completePayment(paymentData) {
  return (dispatch) => {
    const paymentResponse = completePayment(paymentData);
    dispatch({
      type: COMPLETE_PAYMENT,
      paymentResponse
    });
  }
}



