console.log("yo");

function sendColor() {
  fetch("/api/new/testColor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      color: document.getElementById("name").value,
    }),
  });
}

document.getElementById("btn").addEventListener("click", sendColor);
