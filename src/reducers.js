import { SAVE_USER } from './types';
import { COMPLETE_PAYMENT } from './types';
import { combineReducers } from 'redux';

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
case COMPLETE_PAYMENT:
return {
...state,
paymentResponse: action.paymentResponse
}
default:
return state;
}
}

function paymentReducer(state = {}, action) {
switch (action.type) {
case COMPLETE_PAYMENT:
return {
...state,
paymentResponse: action.paymentResponse
}
default:
return state;
}
}

const reducers = combineReducers({
user: userReducer,
payment: paymentReducer
});

export default reducers;