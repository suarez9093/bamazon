const mysql = require("mysql");
const inquirer = require("inquirer");

// Connecting to Mysql
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Slackind1!",
  database: "bamazon"
});

const query = "SELECT * FROM products";





// Functions
// ========================================================================================================================================

const displayData = () => {
  connection.query(query, (err, result) => {
    if (err) throw err;

    console.log("\nInventory in stock");
    console.log("============================================================================================================\n");
    for (let i = 0; i < result.length; i++) {
      console.table([{ "ID": result[i].item_id, "Product name": result[i].product_name, "Department": result[i].department_name, "Price": result[i].price, "Stock": result[i].stock_quantity }])
    }
    console.log("\n============================================================================================================\n");
    prompts();
  })

};


const prompts = () => {

  inquirer.prompt([
    {
      name: "prompt",
      type: "input",
      message: "What item would you like to purchase? (enter ID)",
    },
    {
      name: "promptTwo",
      type: "input",
      message: "How many would you like to buy?"
    },])
    .then((answer) => {
      connection.query(query, (err, result) => {
        if (err) throw (err);
        let chosenItem;
        for (let i = 0; i < result.length; i++) {
          if (result[i].item_id === parseInt(answer.prompt)) {
            chosenItem = result[i];
            if (chosenItem.stock_quantity === 0) {
              console.log("Item not in stock! Please choose another item");
            } else {
              connection.query(`UPDATE products SET stock_quantity = stock_quantity - ${answer.promptTwo} WHERE item_id = ${chosenItem.item_id}`)
              console.table([{ "ID": result[i].item_id, "Product name": result[i].product_name, "Department": result[i].department_name, "Price": result[i].price, "Stock": result[i].stock_quantity }])
              connection.end();
            }
          }
        }
      })
    })
};

function start() {
  displayData();
};


// Main process
// =======================================================================================================================
start();
// prompts();

