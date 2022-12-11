import  React from 'react';

function CompletePayment(email, amount,age) {
  
  console.log(email,amount,age);
  // Check if the user exists and is within the age limit (18-65)
  const user = User.find(email);
  if (!user || user.age < 18 || user.age > 65) {
    return { success: false, error: 'Invalid user' };
  }

  // Check if the payment amount is valid (500/- Rs INR)
  if (amount !== 500) {
    return { success: false, error: 'Invalid payment amount' };
  }

  // Check if the user has already made a payment for the given month
  const payments = Payment.find({ email, date: { $gte: startOfMonth(date), $lt: endOfMonth(date) } });
  if (payments.length > 0) {
    return { success: false, error: 'Payment already made for the given month' };
  }

  // Process the payment
  const payment = Payment.create({ email, amount, date });

  return { success: true, payment };
}


export default CompletePayment
