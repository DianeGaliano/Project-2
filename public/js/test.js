// console.log("yo");

// function sendInfo() {
//   fetch("/api/carInfoRoutes", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: document.getElementById("name").value,
//     }),
//   });
// }

// document.getElementById("btn").addEventListener("click", sendInfo);

const form = document.getElementById("carInfo");

form.addEventListener("submit", (event) => {
  // stop form submission
  event.preventDefault();
  // console.log(form.elements)
  const { fname, lname, vehicle, phone } = form.elements;
  const formData = {
    first_name: fname.value,
    last_name: lname.value,
    phone: phone.value,
    vehicle: vehicle.value,
    description: description.value,
  };
  fetch("/api/carInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  console.log(formData);
});
