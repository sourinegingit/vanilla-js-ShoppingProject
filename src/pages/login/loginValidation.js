import { BASEURL } from "../../api/baseUrl";
import { router } from "../../routes/router";

export const loginData = async (event) => {
  event.preventDefault();

  //   dom
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const rememberMe = document.getElementById("remember-me-checkbox").checked;

  try {
    const response = await fetch(`${BASEURL}/users`);
    const users = await response.json();

    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      // Navigate to home if successful login
      if (router && router.navigate) {
        router.navigate("/home");
      }
    } else {
      const errorMessage = document.getElementById("error-message");
      errorMessage.classList.remove("hidden");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};
const autoLogin = () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  if (email && password) {
    fetch(`${BASEURL}/users`)
      .then((res) => res.json())
      .then((users) => {
        const user = users.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          router.navigate("/home"); // Successfully logged in
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }
      })
      .catch((err) => {
        console.error("Error checking auto-login:", err);
      });
  }
};
autoLogin();

// const autoLogin = async () => {
//   const email = localStorage.getItem("email");
//   const password = localStorage.getItem("password");

//   if (email && password) {
//     const response = await fetch("http://localhost:4000/users");
//     const users = await response.json();

//     const user = users.find((user) => user.email === email);

//     if (user) {
//       router.navigate("/home"); // Successfully logged in
//     } else {
//       localStorage.removeItem("email");
//       localStorage.removeItem("password");
//     }
//   }
// };

// autoLogin();

export default loginData;
