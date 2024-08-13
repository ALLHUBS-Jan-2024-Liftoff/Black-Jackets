import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function LoginForm({ setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      setAuthenticated(true);
      alert(response.data.message);
      navigate("/venue-dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

   return (
     <div className="mt-5">
       <form onSubmit={handleLogin}>
         <div className="mb-3">
           <label className="form-label">
             Email
             <input
               type="text"
               className="form-control"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
             />
           </label>
         </div>
         <div className="mb-3">
           <label className="form-label">
             Password
             <input
               type="password"
               className="form-control"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
             />
           </label>
         </div>
         <button type="submit" className="btn btn-primary mt-3">
           Login
         </button>
       </form>
       {message /* && <p>{message}</p> */ }
     </div>
   );
}

export default LoginForm;

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
// //   const [emailError, setEmailError] = useState("");
// //   const [passwordError, setPasswordError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//       await AuthService.login(email, password)
//       .then((response) => {
//         if (response.data !== "") {
//           alert("Login Successful!");
//           navigate("/venue-dashboard");
//           window.location.reload();
//         }
//         (error) => {
//           console.log(error);
//         }
//     });
//     } catch (err) { 
//       console.log(err);
//     }
//   };

//   return (
//     <div className="mt-5">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">
//             Email
//             <input
//               type="text"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">
//             Password
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary mt-3"
//           // disabled={!getIsFormValid()}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

// const LoginForm = (props) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameError, setUsernameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const navigate = useNavigate();

//   const onButtonClick = () => {
//     // Set initial error values to empty
//     setUsernameError("");
//     setPasswordError("");

//     // Check if the user has entered both fields correctly

//     if (!/^[\w]+([\w-])+[\w-]{2,4}$/.test(username)) {
//       setUsernameError("Please enter a valid username");
//       return;
//     }

//     if (password.length < 7) {
//       setPasswordError("The password must be 8 characters or longer");
//       return;
//     }

//    checkAccountExists((accountExists) => {

//     if (accountExists) logIn()

//     else if (
//       alert(
//         'An account does not exist with this username: ' +
//           username +
//           '. Do you want to create a new account?',
//       )
//     ) {
//       logIn()
//     }
//   })
// }

// const checkAccountExists = (callback) => {
//     login(username, password)
//     .then((r) => r.json())
//     .then((r) => {
//       callback(r?.userExists);
//     });
// };

//  const logIn = () => {
//    login(username, password)
//      .then((r) => r.json())
//      .then((r) => {
//        if ("success" === r.message) {
//          localStorage.setItem(
//            "user",
//            JSON.stringify({ username, token: r.token })
//          );
//          props.setLoggedIn(true);
//          props.setUsername(username);
//          navigate("/");
//        } else {
//          window.alert("Wrong email or password");
//        }
//      });
//  };