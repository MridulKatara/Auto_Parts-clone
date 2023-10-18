// //sample data

// const products = [
//     { name: "Product 1", price: 49.99, category: "Houseplants" },
//     { name: "Product 2", price: 69.99, category: "Flowerpot" },
//     { name: "Product 3", price: 79.99, category: "Soil" },
//     // Add more product objects as needed
//   ];
//   const popularProducts = [
//     { name: "Popular Product 1", price: 99.99 },
//     { name: "Popular Product 2", price: 119.99 },
//     { name: "Popular Product 3", price: 139.99 },
//     // Add more popular product objects as needed
//   ];

//   // ----------------------------------------



// let body = document.querySelector("body");
// let i = 1,
//   throttler = false;
// window.onscroll = () => {
//   if (throttler) return;
//   throttler = true;
//   setTimeout(() => {
//     throttler = false;
//   }, 100);
//   if (Math.ceil(window.scrollY) > i * 700) {
//     console.log(Math.ceil(window.scrollY));
//     start = render(data, start, 6, "scroll");
//     i++;
//   }
// };
// document.getElementById("footer").innerHTML = footer();
// let houseplants = false,
//   houseplant_sets = false,
//   flowerpots = false,
//   soil_fertilizers = false;
// let houseplantFilter = document.getElementById("houseplant_filter");
// let data = products,
//   start = 0;
// houseplantFilter.onchange = () => {
//   houseplants = !houseplants;
//   data = sortNfilter();
//   start = render(data, 0);
//   i = 1;
// };

// let priceRangeFilter = document.getElementById("price_range_filter");
// priceRangeFilter.onchange = () => {
//   data = sortNfilter();
//   start = render(data, 0);
//   i = 1;
// };
// let houseplantSetsFilter = document.getElementById("houseplant_set_filter");
// houseplantSetsFilter.onchange = () => {
//   houseplant_sets = !houseplant_sets;
//   data = sortNfilter();
//   start = render(data, 0);
//   i = 1;
// };
// let flowerpotFilter = document.getElementById("flowerpot_filter");
// flowerpotFilter.onchange = () => {
//   flowerpots = !flowerpots;
//   data = sortNfilter();
//   start = render(data, 0);
//   i = 1;
// };
// let soilFertilizerFilter = document.getElementById(
//   "soil_and_fertilizers_filter"
// );
// soilFertilizerFilter.onchange = () => {
//   soil_fertilizers = !soil_fertilizers;
//   data = sortNfilter();
//   start = render(data, 0);
//   i = 1;
// };
// let sorting = document.getElementById("sorting");
// sorting.onchange = () => {
//   data = sortNfilter();
//   start = render(data, 0);
//   i = 1;
// };
// document.getElementById("reset_filters").onclick = () => {
//   if (houseplants) houseplantFilter.click();
//   if (houseplant_sets) houseplantSetsFilter.click();
//   if (flowerpots) flowerpotFilter.click();
//   if (soil_fertilizers) soilFertilizerFilter.click();
//   priceRangeFilter.value = 2500;
//   data = sortNfilter();
//   start = render(data, 0);
// };
// let sortNfilter = () => {
//   let filtered = productFilter();
//   let sortedNFiltered = productSort(filtered);
//   return sortedNFiltered;
// };
// let productFilter = () => {
//   let priceRange = parseInt(priceRangeFilter.value);
//   data = products.filter((el) => {
//     if (!houseplants && !houseplant_sets && !flowerpots && !soil_fertilizers)
//       return el.price <= priceRange;
//     let res = false;
//     if (houseplants && el.category === "Houseplants") res = true;
//     if (houseplant_sets && el.category === "Houseplant Sets") res = true;
//     if (flowerpots && el.category === "Flowerpot") res = true;
//     if (
//       soil_fertilizers &&
//       (el.category === "Soil" || el.category === "Fertilizer")
//     )
//       res = true;
//     return el.price <= priceRange && res;
//   });
//   return data;
// };
// let productSort = (data) => {
//   let val = sorting.value;
//   let temp = [...data];
//   if (val === "atoz") return temp.sort((a, b) => a.name.localeCompare(b.name));
//   else if (val === "ztoa")
//     return temp.sort((a, b) => -a.name.localeCompare(b.name));
//   else if (val === "lowtohigh") return temp.sort((a, b) => a.price - b.price);
//   else if (val === "hightolow") return temp.sort((a, b) => b.price - a.price);
//   else return temp;
// };
// let nextPopProd = document.getElementById("next_popular_product");
// let prevPopProd = document.getElementById("prev_popular_product");

// let popStart = 0;

// nextPopProd.onclick = () => {
//   popStart = popularProductsRender("", popStart, 4);
//   if (popStart >= popularProducts.length) {
//     nextPopProd.disabled = true;
//     nextPopProd.style.backgroundColor = "lightgray";
//   }
//   if (popStart > 0) {
//     prevPopProd.disabled = false;
//     prevPopProd.style.backgroundColor = "#486e00";
//   }
// };

// prevPopProd.onclick = () => {
//   popStart = popularProductsRender("", popStart - 6, 4);
//   if (popStart == 0 || popStart == 4) {
//     prevPopProd.disabled = true;
//     prevPopProd.style.backgroundColor = "lightgray";
//   }
//   if (popStart < popularProducts.length) {
//     nextPopProd.disabled = false;
//     nextPopProd.style.backgroundColor = "#486e00";
//   }
// };
// window.onload = () => {
//   start = render(products, 0);
//   popStart = popularProductsRender("./", popStart, 4);
// };
// for (let elem of document.getElementsByClassName("catalog_link")) {
//   elem.disabled = true;
//   elem.style.color = "darkgray";
// }
// prevPopProd.disabled = true;
// prevPopProd.style.backgroundColor = "lightgray";
// main.js

const productsContainer = document.getElementById("products_container");

// Updated JSON data to match your mock server response
const mockData = [
  {
    partId: "123",
    name: "Brake Pad",
    category: {
      categoryId: "1",
      name: "BATTERIES",
    },
    brand: {
      brandId: "100",
      name: "ACME",
    },
    price: 2699,
    quantity: 100,
    image:
      "https://media.gettyimages.com/id/95757579/photo/profile-and-side-profile-view-of-a-car-wheel-on-white.jpg?s=612x612&w=gi&k=20&c=awd-KrLiALOhoDkrJtFVdyuoDSpDzWHCCpw3vJ4mi50=",
  },
  {
    partId: "123",
    name: "Castrol",
    category: {
      categoryId: "2",
      name: "Engines",
    },
    brand: {
      brandId: "100",
      name: "ACME",
    },
    price: 2599,
    quantity: 100,
    image:
      "https://media.gettyimages.com/id/95757579/photo/profile-and-side-profile-view-of-a-car-wheel-on-white.jpg?s=612x612&w=gi&k=20&c=awd-KrLiALOhoDkrJtFVdyuoDSpDzWHCCpw3vJ4mi50=",
  },
  {
    partId: "123",
    name: "Engines",
    category: {
      categoryId: "3",
      name: "BATTERIES",
    },
    brand: {
      brandId: "100",
      name: "ACME",
    },
    price: 1399,
    quantity: 100,
    image:
      "https://www.autozone.com/cdn/images/B2C/US/media/content/FeatCat/evergreen-grid4-batteries-d.jpg",
  },
  {
    partId: "123",
    name: "Brake Pad",
    category: {
      categoryId: "1",
      name: "TYRES SET",
    },
    brand: {
      brandId: "100",
      name: "ACME",
    },
    price: 1299,
    quantity: 100,
    image:
      "https://www.autozone.com/cdn/images/B2C/US/media/content/FeatCat/evergreen-grid4-wipers-d.jpg",
  },
  {
    partId: "123",
    name: "Brake Pad",
    category: {
      categoryId: "1",
      name: "Engine oil",
    },
    brand: {
      brandId: "100",
      name: "ACME",
    },
    price: 25.99,
    quantity: 100,
    image:
      "https://media.gettyimages.com/id/95757579/photo/profile-and-side-profile-view-of-a-car-wheel-on-white.jpg?s=612x612&w=gi&k=20&c=awd-KrLiALOhoDkrJtFVdyuoDSpDzWHCCpw3vJ4mi50=",
  },
];

// Flag to track whether sorting is applied
let isSortingApplied = false;

// Function to display the data
function displayData(data) {
  // Clear the existing products container
  productsContainer.innerHTML = '';

  data.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.className = "product";

    const productImage = document.createElement("img");
    productImage.src = product.image;
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

// Call the function to display data using the original mock data
displayData(mockData);

// Sorting
const sortingSelect = document.getElementById("sorting");

sortingSelect.addEventListener("change", () => {
  const selectedOption = sortingSelect.value;
  sortAndDisplay(selectedOption);
});

function sortAndDisplay(selectedOption) {
  // Sort the original data based on the selected option if sorting is not applied
  if (!isSortingApplied) {
    isSortingApplied = false;

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

// Call the initial display when the page loads
sortAndDisplay(sortingSelect.value);

// filter part 

// Filter data based on selected filters
function filterAndDisplay() {
    const selectedFilters = [];

    // Get selected product categories
    const checkboxes = document.querySelectorAll('#filters input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFilters.push(checkbox.value); // Use the "value" attribute for category names
        }
    });

    // Get selected price range
    const priceRangeFilter = document.getElementById('price_range_filter');
    const selectedPrice = priceRangeFilter.value;

    // Filter products based on selected filters
    const filteredData = mockData.filter((product) => {
        const categoryMatch = selectedFilters.length === 0 || selectedFilters.includes(product.category.name.toUpperCase());
        const priceMatch = product.price <= selectedPrice;
        return categoryMatch && priceMatch;
    });

    // Call the function to display the filtered data
    displayData(filteredData);
}

// Add event listeners for checkboxes and price range filter
const filterCheckboxes = document.querySelectorAll('#filters input[type="checkbox"]');
const priceRangeFilter = document.getElementById('price_range_filter');

filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', filterAndDisplay);
});

priceRangeFilter.addEventListener('input', filterAndDisplay);


