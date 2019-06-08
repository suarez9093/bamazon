// * **Instructions**


//   * Create a Node Application with Express and MySQL with three Express routes.

//     * Create a `/cast` route that will display all the actors and their data ordered by their id's.

//     * Create a `/coolness-chart` route that will display all the actors and their data ordered by their coolness points.

//     * Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude.



// Dependencies
const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 3000;

// const connection = mysql.createConnection({
//     host: "localhost",
//     port:3306,
//     user: "alex",
//     password: "Slackind1!",
//     database: "seinfeld_db"
// });

const query = "SELECT * FROM actors";

// Routes
// ===================================================
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
})


const displayActors = () =>{
    connection.connect((err) => {
        if (err) throw err;
        connection.query(query, (err, result) => {
          if (err) throw err;
          for (let i = 0; i < result.length; i++) {
              console.log(result[i]);
          }
         
        })
      })
    };

    // displayActors();