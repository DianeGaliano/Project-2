// const loginHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#email-login").value.trim();
//   const password = document.querySelector("#password-login").value.trim();
//   const empId = document.querySelector("#emp-login").value.trim();

//   if (email && password) {
//     const response = await fetch("/api/cust/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/custprof");
//     } else {
//       alert(response.statusText);
//     }
//   }

//   if (email && password && empId) {
//     const response = await fetch("/api/comp/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password, employee_id }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/compprof");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// const signupHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector("#name-signup").value.trim();
//   const email = document.querySelector("#email-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();
//   const empId = document.querySelector("#emp-signup").value.trim();

//   if (name && email && password) {
//     const response = await fetch("/api/cust", {
//       method: "POST",
//       body: JSON.stringify({ name, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/custprof");
//     } else {
//       alert(response.statusText);
//     }
//   }

//   if (name && email && password && empId) {
//     const response = await fetch("/api/comp", {
//       method: "POST",
//       body: JSON.stringify({ name, email, password, employee_id }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/compprof");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document.querySelector(".login-form").addEventListener("submit", loginHandler);
// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupHandler);
