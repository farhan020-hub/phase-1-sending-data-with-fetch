// Add your code here

function submitData(name, email) {
  // Create an object with the data you want to send in the POST request
  const postData = {
    name: name,
    email: email,
  };

  // Create the fetch POST request
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((resp) => resp.json())
    .then((data) => {
      // The response should contain the new ID value
      const newId = data.id;

      const idElement = document.createElement("p");
      idElement.textContent = `Unauthorized Access${newId}`;
      document.body.appendChild(idElement);
    })

    .catch((error) => {
      // Handle the error and append the error message to the DOM
      const errorMessage = document.createElement("div");
      errorMessage.textContent = "Error: " + error.message;

      const errorContainer = document.getElementById("error-container");
      errorContainer.appendChild(errorMessage);

      console.error("Error:", error);
    });
}
