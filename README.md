# bamazon

 Description: 
 
 The bamazon CLI app takes in orders requests from user and depletes the quantity from the inventory. 
 
Node Interface
The interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the app interface the following command is typed into Node:

node bamazonCustomer.js

This will then display all the items which will consist of an item ID, product name, department name, price and stock quantity.

Using the inquirer package messages will then populate to the interface asking which item the user would like to purchace and the quantity. This will then deplete the stock quantity, update the interface as well as the database. 

Link to Video:

https://drive.google.com/file/d/12zgnA5_xomxplM1eYG4ltaz0OB-_wluo/view



 
