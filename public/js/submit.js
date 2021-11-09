const submitHandler = async (event) => {
    event.preventDefault();

    const submitBttn = document.querySelector("#submitBttn");
    const first_name = document.querySelector("#first_name");
    const last_name = document.querySelector("#last_name");
    const vehicle = document.querySelector("#vehicle");
    const description =  document.querySelector("#description");

    if (first_name && last_name && vehicle && description) {
        const response = await fetch('/api/carInfo', {
            method: "POST",
            body: JSON.stringify({ first_name, last_name, vehicle, description }),
            headers: { "Content-Type": "application/JSON"}
        });

        if (response.ok) {
            document.location.reload("/compprof")
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector("#submit-form").addEventListener("submit", submitHandler)