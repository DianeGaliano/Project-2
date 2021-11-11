var addNewVehicle = async (event) => {
  console.log("clicked");
  event.preventDefault();

  document.location.replace("/api/addVehicle");

  // const responseMessage = await response.json();
  // if (response.ok) {
  //   displayMessage.textContent = responseMessage.message;
  // } else {
  //   displayMessage.textContent = responseMessage.message;
  // }
};

document.querySelector("#addVehicle").addEventListener("click", addNewVehicle);
