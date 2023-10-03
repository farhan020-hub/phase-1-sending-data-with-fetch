// Add your code here
 
function submitData(name,email) {
  // Create an object with the data you want to send in the POST request
  const postData = {
    // Include your data fields here
    // For example:
    name: name,
    email: email,
  };

  const postRequest = {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(postData),
}
  // Create the fetch POST request
  fetch("http://localhost:3000/users", postRequest)
   
  .then((resp) => resp.json())
    .then((data) => {
      // The response should contain the new ID value
      const newId = data.id;

      const idElement = document.createElement('p');
      idElement.textContent = `Unauthorized Access${newId}`;
      document.body.appendChild(idElement);
    })
   
    .catch((error) => {
      // Handle the error and append the error message to the DOM
      const errorMessage = document.createElement('div');
      errorMessage.textContent = 'Error: ' + error.message;

      // Append the error message to a specific element in the DOM (replace 'error-container' with the actual ID or selector)
      const errorContainer = document.getElementById('error-container');
      errorContainer.appendChild(errorMessage);

      console.error('Error:', error);
    });
}
