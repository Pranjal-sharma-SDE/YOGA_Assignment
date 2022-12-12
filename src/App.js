import React from 'react';
import './App.css';
import AdmissionForm from './Admission';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Profile from './Profile';
import "./Firebase/Configure"
import Home from './Home';
import Signup from './Signup';

import Header from './Header';




class App extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      batch: '',
      error: '',
      success: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, batch } = this.state;
    if (name === '' || age === '' || batch === '') {
      this.setState({
        error: 'Please fill all the fields'
      })
    } else if (age < 18 || age > 65) {
      this.setState({
        error: 'Age should be between 18 and 65'
      })
    } else {
      this.setState({
        error: '',
        success: 'Successfully registered'
      })
    }
  }*/

  render() {
   // const { name, age, batch, error, success } = this.state;
    return (
      <div className="App">
       {/* <Header/>
        <h1>Yoga Classes</h1>
        <h2><center><a href="./user" > Admission</a></center></h2>
        
       <Home/>*/}
     {/*}
        
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          <label>Age</label>
          <input type="number" name="age" value={age} onChange={this.handleChange} />
          <label>Batch</label>
          <select name="batch" value={batch} onChange={this.handleChange}>
            <option value="">Select</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <AdmissionForm></AdmissionForm>
    */}
    <Router>
        <Routes>
        <Route path="/" element={<><Header/><Home/></>}/>
      <Route path="user" element={<><Header/><AdmissionForm/></>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path='signup' element={<Signup/>}/>
      

      </Routes>
    
  </Router>
  

      </div>
    );
  }
}

export default App;