//------------------------------------------------------ Folder Directory  ---------------------------------------------------------------//

//  OVS-Task
//       | -> Controllers
//       |          | ->Order Modals
//       |          | ->Products Modal
//       |          | ->Vendor Modal
//       |
//       | -> Routes
//       |          | ->Order Routes
//       |          | ->Products Routes
//       |          | ->Vendor Routes
//       |
//       | -> Modals
//       |          | ->Order Modals
//       |          | ->Products Modal
//       |          | ->Vendor Modal
//       |
//       | -> Controllers
//       |          | ->Order Modals
//       |          | ->Products Modal
//       |          | ->Vendor Modal
//       | ->.env
//       | ->index.js


// ---------------------------------------------------  How to fetch all API's  ----------------------------------------------------------//

// open the root folder in visual studio code
// open terminal and install all dependency

// npm install
// npm start

// -------------------------------------------------- For Vendor -----------------------------------------------------------------------//

//  Vendor Registeration
// http://localhost:8080/vendors/register
// {
//     "name":"saket shukla",
//     "email":"saket@gmail.com",                   pass data using json format
//     "password":"saket@123"                       token will automatically generate and will store in the data with vendors information
// }

// Vendor Login
//  http://localhost:8080/vendors/login 
// {
//     "email":"saket@gmail.com",                   pass data using json format
//     "password":"saket@123"                       at  when we will login everytime new token will generate and automatically update in 
// }                                                the database

// ------------------------------------------------- For Product ------------------------------------------------------------------------//


// -----------  Add Product  --------------// 

// http://localhost:8080/products/addProduct
// pass vendor token through bearer token
// {
//     "name":"Mac Book Pro",
//     "price":280000,
//     "stock":20
// }

// ---------  getAll Product  --------------// 

// http://localhost:8080/products/getProduct
// pass vendor token through bearer token  


// ---------  Delete Product  --------------// 

// http://localhost:8080/products/deleteProduct
// pass vendor token through bearer token


// ---------  Update Product  --------------//

// http://localhost:8080/products/updateProduct
// pass vendor token through bearer token
// {
//     "productId":"675da2781665fd7228ec095b",
//     "name":"macBook Pro latest",                 
//     "price":3000000,
//     "stock":5
// }

// ------------------------------------------------- For Order ------------------------------------------------------------------------//

//---------  GetAll Order  --------------//
// http://localhost:8080/orders/allOrders

//---------  updateOder MarkAs A Ship Product  --------------//
// http://localhost:8080/orders/mark
// id:'675e2f9b1f41b391cd8575c1'            passs id through params
// 


// -------------------------------------  I am attaching Collection Folder of API ------------------------------------------//
//  ------------------------------------ also attaching data which i have stored in the mongodb database -----------------------------//