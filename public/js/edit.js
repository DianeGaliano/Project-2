const editHandler = async (event) => {
    event.preventDefault();

    const editBttn = document.querySelector("#editBttn")


}

const editSubmitHandler = async (event) => {
    event.preventDefault();

    const editSubmitBttn = document.querySelector("#editSubmitBttn");
    const description =  document.querySelector("#description");

    if (description) {
        const response = await fetch("/api/carInfo/:id", {
            methon: "PUT",
            body: JSON.stringify({ description }),
            headers: { "Content-Type": "application/JSON"}
        })

        if (response.ok) {
            document.location.reload("/compprof")
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector("#edit-form").addEventListener("submit", editHandler)
document.querySelector("#edit-submit-form").addEventListener("submit", editSubmitHandler)
