// JavaScript code here


let popularkData = [];
const productsPerPage = 4;
let currentStartIndex = 0;

function fetchDataFromAPI() {
  fetch('https://drab-gold-goat-sock.cyclic.app/tyres')
    .then(response => response.json())
    .then(data => {
      popularkData = data;
      initializeRandomProducts(); // Initialize random products
      displayData(popularkData);
      sortAndDisplay(sortingSelect.value);
    })
    .catch(error => {
      console.error('Error fetching data from the API', error);
    });
}

// Function to initialize random products
function initializeRandomProducts() {
  const selectedProductIndices = JSON.parse(localStorage.getItem('selectedProducts')) || [];

  if (selectedProductIndices.length === 0) {
    // Generate random indices for the initial selection
    for (let i = 0; i < productsPerPage; i++) {
      const randomIndex = getRandomNumber(0, popularkData.length - 1);
      selectedProductIndices.push(randomIndex);
    }
  }

  displayRandomProducts(selectedProductIndices);
}


// Function to update local storage
function updateLocalStorage(indices) {
  localStorage.setItem('selectedProducts', JSON.stringify(indices));
}

function displayRandomProducts(indices) {
  const popularProductsBody = document.getElementById('popularProducts_body');
  popularProductsBody.innerHTML = '';

  for (const index of indices) {
    const product = popularkData[index];
    const productElement = createProductElement(product);
    popularProductsBody.appendChild(productElement);
  }
}

// Function to create a product element
function createProductElement(product) {
  // Create the product element (e.g., a div containing product information)
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  // Add product information to the element (e.g., product name, price, image)
  productElement.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: Rs. ${product.price}</p>
    <img src="${product.images[0]}" alt="${product.name}">
  `;

  return productElement;
}

// Helper function to get a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Call the function to fetch data from the API when the page loads
fetchDataFromAPI();

// Get the buttons by their IDs
const prevPopularButton = document.getElementById('prev_popular_product');
const nextPopularButton = document.getElementById('next_popular_product');

prevPopularButton.addEventListener('click', showPreviousProducts);
nextPopularButton.addEventListener('click', showNextProducts);

function showPreviousProducts() {
  if (currentStartIndex - productsPerPage >= 0) {
    currentStartIndex -= productsPerPage;
    displayRandomProducts(currentStartIndex, currentStartIndex + productsPerPage);
  }
}

function showNextProducts() {
  if (currentStartIndex + productsPerPage < popularkData.length) {
    currentStartIndex += productsPerPage;
    displayRandomProducts(currentStartIndex, currentStartIndex + productsPerPage);
  }
}

// Call the function to display random products when the page loads
document.addEventListener('DOMContentLoaded', function () {
  initializeRandomProducts();
});
