

// const productsContainer = document.getElementById("products_container");

// // Updated JSON data to match your mock server response
// const mockData = [
//   {
//     partId: "123",
//     name: "Brake Pad",
//     category: {
//       categoryId: "1",
//       name: "BATTERIES",
//     },
//     brand: {
//       brandId: "100",
//       name: "ACME",
//     },
//     price: 2699,
//     quantity: 100,
//     image:
//       "https://media.gettyimages.com/id/95757579/photo/profile-and-side-profile-view-of-a-car-wheel-on-white.jpg?s=612x612&w=gi&k=20&c=awd-KrLiALOhoDkrJtFVdyuoDSpDzWHCCpw3vJ4mi50=",
//   },
//   {
//     partId: "123",
//     name: "Castrol",
//     category: {
//       categoryId: "2",
//       name: "Engines",
//     },
//     brand: {
//       brandId: "100",
//       name: "ACME",
//     },
//     price: 2599,
//     quantity: 100,
//     image:
//       "https://media.gettyimages.com/id/95757579/photo/profile-and-side-profile-view-of-a-car-wheel-on-white.jpg?s=612x612&w=gi&k=20&c=awd-KrLiALOhoDkrJtFVdyuoDSpDzWHCCpw3vJ4mi50=",
//   },
//   {
//     partId: "123",
//     name: "Engines",
//     category: {
//       categoryId: "3",
//       name: "BATTERIES",
//     },
//     brand: {
//       brandId: "100",
//       name: "ACME",
//     },
//     price: 1399,
//     quantity: 100,
//     image:
//       "https://www.autozone.com/cdn/images/B2C/US/media/content/FeatCat/evergreen-grid4-batteries-d.jpg",
//   },
//   {
//     partId: "123",
//     name: "Brake Pad",
//     category: {
//       categoryId: "1",
//       name: "TYRES SET",
//     },
//     brand: {
//       brandId: "100",
//       name: "ACME",
//     },
//     price: 1299,
//     quantity: 100,
//     image:
//       "https://www.autozone.com/cdn/images/B2C/US/media/content/FeatCat/evergreen-grid4-wipers-d.jpg",
//   },
//   {
//     partId: "123",
//     name: "Brake Pad",
//     category: {
//       categoryId: "1",
//       name: "Engine oil",
//     },
//     brand: {
//       brandId: "100",
//       name: "ACME",
//     },
//     price: 25.99,
//     quantity: 100,
//     image:
//       "https://media.gettyimages.com/id/95757579/photo/profile-and-side-profile-view-of-a-car-wheel-on-white.jpg?s=612x612&w=gi&k=20&c=awd-KrLiALOhoDkrJtFVdyuoDSpDzWHCCpw3vJ4mi50=",
//   },
// ];

// // Flag to track whether sorting is applied
// let isSortingApplied = false;

// // Function to display the data
// function displayData(data) {
//   // Clear the existing products container
//   productsContainer.innerHTML = '';

//   data.forEach((product) => {
//     const productContainer = document.createElement("div");
//     productContainer.className = "product";

//     const productImage = document.createElement("img");
//     productImage.src = product.image;
//     productImage.alt = product.name;
//     productImage.classList.add("product_img_container");

//     const productName = document.createElement("h2");
//     productName.textContent = product.name;

//     const productPrice = document.createElement("p");
//     productPrice.textContent = `$${product.price.toFixed(2)}`;

//     productContainer.appendChild(productImage);
//     productContainer.appendChild(productName);
//     productContainer.appendChild(productPrice);

//     productsContainer.appendChild(productContainer);
//   });
// }

// // Call the function to display data using the original mock data
// displayData(mockData);

// // Sorting
// const sortingSelect = document.getElementById("sorting");

// sortingSelect.addEventListener("change", () => {
//   const selectedOption = sortingSelect.value;
//   sortAndDisplay(selectedOption);
// });

// function sortAndDisplay(selectedOption) {
//   // Sort the original data based on the selected option if sorting is not applied
//   if (!isSortingApplied) {
//     isSortingApplied = false;

//     switch (selectedOption) {
//       case "atoz":
//         mockData.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case "ztoa":
//         mockData.sort((a, b) => b.name.localeCompare(a.name));
//         break;
//       case "lowtohigh":
//         mockData.sort((a, b) => a.price - b.price);
//         break;
//       case "hightolow":
//         mockData.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         // If no valid sorting option is selected, reset the flag
//         isSortingApplied = false;
//         break;
//     }
//   }

//   // Display the sorted or unsorted data
//   displayData(mockData);
// }

// // Call the initial display when the page loads
// sortAndDisplay(sortingSelect.value);

// // filter part 

// // Filter data based on selected filters
// function filterAndDisplay() {
//     const selectedFilters = [];

//     // Get selected product categories
//     const checkboxes = document.querySelectorAll('#filters input[type="checkbox"]');
//     checkboxes.forEach((checkbox) => {
//         if (checkbox.checked) {
//             selectedFilters.push(checkbox.value); // Use the "value" attribute for category names
//         }
//     });

//     // Get selected price range
//     const priceRangeFilter = document.getElementById('price_range_filter');
//     const selectedPrice = priceRangeFilter.value;

//     // Filter products based on selected filters
//     const filteredData = mockData.filter((product) => {
//         const categoryMatch = selectedFilters.length === 0 || selectedFilters.includes(product.category.name.toUpperCase());
//         const priceMatch = product.price <= selectedPrice;
//         return categoryMatch && priceMatch;
//     });

//     // Call the function to display the filtered data
//     displayData(filteredData);
// }

// // Add event listeners for checkboxes and price range filter
// const filterCheckboxes = document.querySelectorAll('#filters input[type="checkbox"]');
// const priceRangeFilter = document.getElementById('price_range_filter');

// filterCheckboxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', filterAndDisplay);
// });

// priceRangeFilter.addEventListener('input', filterAndDisplay);



const productsContainer = document.getElementById("products_container");
const sortingSelect = document.getElementById("sorting");

// Flag to track whether sorting is applied
let isSortingApplied = false;
let mockData = [];

// Function to display the data
function displayData(data) {
  // Clear the existing products container
  productsContainer.innerHTML = '';

  data.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.className = "product";

    // Assuming you want to display the first image in the images array
    const productImage = document.createElement("img");
    productImage.src = product.images[0];
    productImage.alt = product.name;
    productImage.classList.add("product_img_container");

    const productName = document.createElement("h2");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price.toFixed(2)}`;

    productContainer.appendChild(productImage);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);

    productsContainer.appendChild(productContainer);
  });
}

// Function to fetch data from the API and update mockData
function fetchDataFromAPI() {
  fetch('https://drab-gold-goat-sock.cyclic.app/tyres') // Update the API URL
    .then(response => response.json())
    .then(data => {
      mockData = data; // Update mockData with the fetched data
      displayData(mockData); // Display the updated data
      sortAndDisplay(sortingSelect.value); // Reapply sorting
    })
    .catch(error => {
      console.error('Error fetching data from the API', error);
    });
}

// Call the function to fetch data from the API when the page loads
// fetchDataFromAPI();

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
        mockData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ztoa":
        mockData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "lowtohigh":
        mockData.sort((a, b) => a.price - b.price);
        break;
      case "hightolow":
        mockData.sort((a, b) => b.price - a.price);
        break;
      default:
        // If no valid sorting option is selected, reset the flag
        isSortingApplied = false;
        break;
    }
  }

  // Display the sorted or unsorted data
  displayData(mockData);
}


// filter part 

// Define an array to store the fetched API data
// let mockData = [];



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
  const filteredData = mockData.filter(product => {
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

