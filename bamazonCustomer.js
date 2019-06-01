let mysql = require("mysql");
let inquirer = require("inquirer");

// Connecting to Mysql
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Slackind1!",
  database: "bamazon"
});

let query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products";


function displayData() {
  connection.connect(function (err) {
    if (err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;

      for (let i = 0; i < result.length; i++) {
        console.log(` \nID: ${result[i].item_id} || Product: ${result[i].product_name} || Department: ${result[i].department_name} || Price: ${result[i].price} || Stock: ${result[i].stock_quantity}\n`
        );
      }

      connection.end();
    });
  })

}
displayData();
