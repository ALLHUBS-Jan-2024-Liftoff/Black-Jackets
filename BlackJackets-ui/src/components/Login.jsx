import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    // Set initial error values to empty
    setUsernameError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === username) {
      setUsernameError("Please enter your username");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username)) {
      setUsernameError("Please enter a valid username");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

   checkAccountExists((accountExists) => {

    if (accountExists) logIn()

    else if (
      window.confirm(
        'An account does not exist with this email address: ' +
          email +
          '. Do you want to create a new account?',
      )
    ) {
      logIn()
    }
  })
}


  return (
    <div>
      <br />
      <div className={"mt-3"}>
        Username
        <br />
        <input
          value={username}
          placeholder=""
          onChange={(ev) => setUsername(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{usernameError}</label>
      </div>
      <br />
      <div className={"mt-3"}>
        Password
        <br />
        <input
          value={password}
          placeholder=""
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"mt-3"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
    </div>
  );
};

export default LoginForm;