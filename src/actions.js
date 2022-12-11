
import { SAVE_USER } from './types';
import { COMPLETE_PAYMENT } from './types';


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



