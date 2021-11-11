const submitHandler = async (event) => {
  event.preventDefault();
  console.log("clicked");

  //   const submitBttn = document.querySelector("#submitBttn");
  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const vehicle = document.querySelector("#vehicle").value.trim();
  const description = document.querySelector("#description").value.trim();

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
