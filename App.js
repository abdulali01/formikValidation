import React from 'react';
import {useFormik} from 'formik';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues:
    {
     emailField: '',
     pswField: ''
    },
    onSubmit: values => {
      alert('Login Successful!');
    },

    validate: values => {
      let errors = {};
      if(!values.emailField){
      errors.email ='Required';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.email = 'Username should be an email';
      }
      if(!values.pswField) errors.password ='Required';

      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} 
          values={formik.values.email} />

        {formik.errors.email ? 
          <div id="emailError" style={{color:'red'}} >
            {formik.errors.email}
          </div>: null}

        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange}
        values={formik.values.password} />

        {formik.errors.password ? 
          <div id="pswError"style={{color:'red'}}>
            {formik.errors.password}</div>: null}

        <button id="submitBtn" type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
