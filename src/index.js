import data from './assets/data.json';

// Function to create product cards
function createProductCard(cards) {

    // create main div
    let mainContainer = document.getElementById("product_container");
    let productList = document.createElement('div');
    productList.className = 'product-list';

    cards.forEach(element => {
        let container = document.createElement("div");
        container.className = 'product-card';

        //update product image
        let image = document.createElement("img");
        image.className = 'product-image';
        image.src=element.imagePath;
        container.appendChild(image);

        //update product url
        let anchor = document.createElement("a");
        anchor.setAttribute(
            "href",
            element.url
        );
        anchor.setAttribute("target", '_blank');
        anchor.className = 'product-link';
        anchor.innerText = element.family;
        container.appendChild(anchor);

        // update product name
        let name = document.createElement("span");
        name.className = 'product-name';
        name.innerHTML = element.name;
        container.appendChild(name);
        
        // update product price
        let price = document.createElement("span");
        price.className = "product-price";
        price.innerHTML = element.price;
        container.appendChild(price);

        // update product rating
        let rating = document.createElement("span");
        rating.className = 'product-rating';
        rating.innerHTML = `${element.rating} (${element.totalReviewCount} Reviews)`;
        container.appendChild(rating);
        
        // append the list back to main div
        productList.appendChild(container);
        mainContainer.appendChild(productList);
    });
  }

// get the query param provided to the iframe url
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const searchQuery = params.q || params.oq || "bras";
console.log(searchQuery);

// To print serach category
const category = document.getElementById('product-category');
category.innerHTML = `${searchQuery} on Victoria's Secet`;

// Discover More Link to collection page
const collectionPageLink = document.getElementById("more-items");
collectionPageLink.setAttribute( "href", `https://www.victoriassecret.com/us/vs/${searchQuery}`);
collectionPageLink.setAttribute("target", "_blank");

// make an api call to search service, for now getting this from data.json for development
const products = data[searchQuery];

// create cards from search results
createProductCard(products);

// Close window on click of X button
const button = document.querySelector("button");
button.addEventListener("click", async () => {
  window.close();
});
