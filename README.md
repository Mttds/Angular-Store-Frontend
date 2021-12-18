# MyStore

Angular E-commerce application.

## Backend API

The backend API used to retrieve the products data can be found at https://github.com/Mttds/Nodejs-Store-Backend-API. CORS (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) has been set to allow requests coming from http://localhost:4200 (host and port where this Angular application will be running). The service on http://localhost:3000 (i.e the Backend API) should be running in order to retrieve data from the Angular application (check the repo for info on how to set it up).

#### Project features

The application reflects the same user experience as that of a real-world e-commerce website, including a(n):

* **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities)
* **Product details** page, which displays more information about any particular product
* **Shopping cart**, which includes the products that the user has added to their cart
* **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
* **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

## License

[License](LICENSE.txt)