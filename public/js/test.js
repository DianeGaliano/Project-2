console.log("yo");

function sendColor() {
  fetch("/api/carInfoRoutes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
    }),
  });
}


document.getElementById("btn").addEventListener("click", sendColor);
