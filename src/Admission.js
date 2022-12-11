import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveUser, completePayment } from './actions';
//import CompletePayment from './CompletePayment';


const AdmissionForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [batch, setBatch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if (!name || !email || !age || !batch) {
      alert('Please fill out all required fields.');
      return;
    }

    if (age < 18 || age > 65) {
      alert('Sorry, you must be between 18 and 65 years old to enroll in Yoga Classes.');
      return;
    }

    // Calculate monthly fee
   const monthlyFee = 500;
   // paymentResponse = CompletePayment(email, monthlyFee,age);

    // Call CompletePayment() function to process payment
  const paymentResponse = true;

    if (paymentResponse) {
      // Save user information to database
      props.saveUser(name, email, age, batch);

      // Show success message
      alert('Thank you for enrolling in Yoga Classes! Your payment has been processed successfully.');
    } else {
      // Show error message
      alert('There was a problem processing your payment. Please try again.');
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        />
       <label>Batch</label>
          <select name="batch" value={batch} onChange={(event)=>setBatch(event.target.value)}>
            <option value="">Select</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
          <button type="submit">Submit</button>
          <a href='./'>Home</a>
     
        </form>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  payment: state.payment
  });
  
  const mapDispatchToProps = (dispatch) => ({
  saveUser: (name, email, age, batch) => dispatch(saveUser(name, email, age, batch)),
  completePayment: (email, monthlyFee, age) => dispatch(completePayment(email, monthlyFee, age))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AdmissionForm);