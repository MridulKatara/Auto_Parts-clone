
const productsContainer = document.getElementById("products_container");
const sortingSelect = document.getElementById("sorting");

// Flag to track whether sorting is applied
let isSortingApplied = false;

function fetchDataFromAPI() {
  fetch('https://aware-cyan-mussel.cyclic.app/tyres')
    .then(response => response.json())
    .then(data => {
      popularkData = data;
      populateProducts();
      displayData(popularkData);
      sortAndDisplay(sortingSelect.value);
    })
    .catch(error => {
      console.error('Error fetching data from the API', error);
    });
}

// Call the function to fetch data from the API when the page loads
fetchDataFromAPI();

// Function to display the data
function displayData(data) {
  // Clear the existing products container
  productsContainer.innerHTML = '';

  data.forEach((product) => {
    const productContainer = createProductElement(product);
    productsContainer.appendChild(productContainer);

  });
}

let popularkData = [];
const productsPerPage = 4;
let currentStartIndex = 0;
let currentPage = 1;

// Sorting
sortingSelect.addEventListener("change", () => {
  const selectedOption = sortingSelect.value;
  sortAndDisplay(selectedOption);
});

function sortAndDisplay(selectedOption) {
  // Sort the original data based on the selected option if sorting is not applied
  if (!isSortingApplied) {
    isSortingApplied = false; // Update the sorting flag

    switch (selectedOption) {
      case "atoz":
        popularkData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ztoa":
        popularkData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "lowtohigh":
        popularkData.sort((a, b) => a.price - b.price);
        break;
      case "hightolow":
        popularkData.sort((a, b) => b.price - a.price);
        break;
      default:
        // If no valid sorting option is selected, reset the flag
        isSortingApplied = false;
        break;
    }
  }

  // Display the sorted or unsorted data
  displayCurrentPage();
}

// Function to filter and display the data based on selected filters
function filterAndDisplay() {
  const selectedFilters = [];
  const selectedBrands = [];

  // Get selected product categories
  const categoryCheckboxes = document.querySelectorAll('#filterCategory input[type="checkbox"]');
  categoryCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedFilters.push(checkbox.value);
    }
  });

  // Get selected product brands
  const brandCheckboxes = document.querySelectorAll('#filterBrand input[type="checkbox"]');
  brandCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedBrands.push(checkbox.value);
      
    }
  });

  // Get selected price range
  const priceRangeFilter = document.getElementById('price_range_filter');
  const selectedPrice = priceRangeFilter.value;

  // Filter products based on selected filters
  const filteredData = popularkData.filter(product => {
    const categoryMatch = selectedFilters.length === 0 || selectedFilters.includes(product.category);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const priceMatch = product.price <= selectedPrice;
    return categoryMatch && brandMatch && priceMatch;
  });

  // Call the function to display the filtered data
  displayData(filteredData);
}

// Add event listeners for checkboxes and price range filter
const filterCheckboxes = document.querySelectorAll('.filter input[type="checkbox"]');
const priceRangeFilter = document.getElementById('price_range_filter');

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterAndDisplay);
});

priceRangeFilter.addEventListener('input', filterAndDisplay);

// Function to display the data (You should implement this based on your HTML structure)

// Call the function to fetch data from the API when the page loads
fetchDataFromAPI();




// const popularproductsContainer = document.querySelector(".products-container");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentSlide = 0; // Current slide index

function createProductElement(product) {
  // Create the product element (e.g., a div containing product information)
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  const h3 = document.createElement("h3");
  h3.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `Price:  ₹${product.price}`;

  const bag = document.createElement("button");
  bag.textContent="Add to Cart";
  bag.addEventListener("click", () => {
    // Change the text content
   
    setTimeout(() => {
        bag.textContent = "Added to Cart";
        bag.style.backgroundColor="lightgreen";
    }, 1000); 
    setTimeout(() => {
      bag.textContent = "Add to Cart";
      bag.style.backgroundColor="";
    }, 2000); // Reset after 2 seconds
  });

  const img = document.createElement("img");
  img.setAttribute("src", product.images[0]);
  img.setAttribute("alt", product.name);

  const heartButton = document.createElement("button");
  heartButton.innerHTML = "&#9825;" // This is the heart symbol
  // Add a click event listener to handle adding the product to local storage
  heartButton.addEventListener("click", () => {

    heartButton.innerHTML = "❤️"
    heartButton.style.Color = ("red");
    localStorage.setItem(`product_${product.id}`, JSON.stringify(product));
  });

  img.addEventListener("click", function () {
    window.location.href = "./item.html"
    localStorage.setItem('productkey', JSON.stringify(product));
  })

  productElement.appendChild(img);
  productElement.appendChild(h3);
  productElement.appendChild(price);
  productElement.appendChild(bag);
  // productElement.appendChild(heartButton);

  return productElement;
}




// Populate products into the carousel (You can use your data source)


// Populate products into the carousel (You can use your data source)
function populateProducts() {
  // Clear existing products
  const productsContainer = document.querySelector(".products-container");
  productsContainer.innerHTML = "";

  // Display products based on the currentSlide
  for (let i = currentSlide; i < currentSlide + productsPerPage; i++) {
    if (i < popularkData.length) {
      const product = popularkData[i];
      const productElement = createProductElement(product);
      productsContainer.appendChild(productElement); // Use productsContainer here
    }
  }
}


// Event listeners for navigation
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide -= productsPerPage;
    populateProducts();
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide + productsPerPage < popularkData.length) {
    currentSlide += productsPerPage;
    populateProducts();
  }
});

// Initial population of products
populateProducts();


//pagination

const productsPerPageList = 11;
function displayProducts(pageNumber, productsPerPage) {
  // Calculate the start and end indices for the current page
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Clear the existing products container
  const productsContainer = document.getElementById("products_container");
  productsContainer.innerHTML = '';

  // Display products for the current page
  for (let i = startIndex; i < endIndex && i < popularkData.length; i++) {
    const product = popularkData[i];
    const productContainer = createProductElement(product);
    productsContainer.appendChild(productContainer);
  }
}


function createPaginationButtons() {
  const totalPages = Math.ceil(popularkData.length / productsPerPageList);

  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayCurrentPage();
    });
    paginationContainer.appendChild(pageButton);
  }
}

function displayCurrentPage() {
  const startIndex = (currentPage - 1) * productsPerPageList;
  const endIndex = startIndex + productsPerPageList;
  const productsToDisplay = popularkData.slice(startIndex, endIndex);

  displayData(productsToDisplay);
}

// Initial population of the first page
displayCurrentPage();
