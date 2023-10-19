const newData = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
  };
  

  fetch('https://mock-server-api-ar9n.onrender.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Specify the content type
  },
  body: JSON.stringify(newData), // Convert the data to a JSON string
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Data added successfully:', data);
})
.catch(error => {
  console.error('There was a problem adding the data:', error);
});
