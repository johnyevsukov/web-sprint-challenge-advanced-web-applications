import Axios from "axios";
import React, { useEffect, useState } from "react";

const initialFormValues = {
  username: 'Lambda School',
  password: 'i<3Lambd4'
}

const Login = (props) => {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ error, setError ] = useState('')
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  //not quite sure what this useEffect is for... 
  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:5000/api/login', formValues)
    .then(res => {
      console.log(res.data.payload)
      localStorage.setItem("token", res.data.payload)
      props.history.push('/bubblepage')
    })
    .catch(res => {
      console.log(res)
      setError('Username or Password not valid')
      setFormValues(initialFormValues)
    })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:&nbsp;
          <input
          data-testid="username"
          type='text'
          name='username'
          value={formValues.username}
          onChange={handleChange}
          />
        </label>
        <label>
          Password:&nbsp;
          <input
          data-testid="password"
          type='text'
          name='password'
          value={formValues.password}
          onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.