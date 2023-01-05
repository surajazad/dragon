import data from './assets/data.json';

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
        anchor.innerText = "Victoria Secret's";
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

// make an api call to search service, for now getting this from data.json for development
const products = data[searchQuery];

// create cards from search results
createProductCard(products);
