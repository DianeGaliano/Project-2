const submitHandler = async (event) => {
  event.preventDefault();
  console.log("clicked");

  //   const submitBttn = document.querySelector("#submitBttn");
  const first_name = document.querySelector("#first_name");
  const last_name = document.querySelector("#last_name");
  const phone = document.querySelector("#phone");
  const vehicle = document.querySelector("#vehicle");
  const description = document.querySelector("#description");

  if (first_name && last_name && phone && vehicle && description) {
    const response = await fetch("/api/carInfo", {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        phone,
        vehicle,
        description,
      }),
      headers: { "Content-Type": "application/JSON" },
    });

    if (response.ok) {
      document.location.replace("/compprof");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#submit-form")
  .addEventListener("submit", submitHandler);
