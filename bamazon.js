//Use require to get access to npm installations
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

//create a connection variable to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.argv[2],
    database: "bamazon_db"
});
//set COST VARiABLE TO UPDATE AS PURCHASES ARE ADDED 
var cost = 0;

// start connection to my sql
connection.connect(function (err) {
    if (err) throw err;



    //   
    //   bid();

    //       connection.query("SELECT product_name FROM products WHERE id = 2",  function (err, res, fields) {
    // console.log(res)
    //       });

});

// function that gathers info about what the user wants to buy
var bid = function () {
    inquirer.prompt([
        {
            name: "id",
            message: "Select the Id of the product you would like to bid on.",
            type: "input",
        }, {

            name: "quantity",
            message: "How many would you like?",
            type: "input",
        }
    ]).then(function (answer) {
       
        var identifier = answer.id;
        var amount = answer.quantity;
        bidding(identifier, amount)
    })

}
// function that analyzes if there is enough stock to meet users request
var bidding = function (identifier, amount) {
    connection.query("SELECT stock_quantity, product_name, price FROM products WHERE id = ?", [identifier], function (err, results, fields) {
        // if (err) throw err;

        // console.log(results[0].stock_quantity)

        console.log("You want to buy " + amount + " " + results[0].product_name)
//redirects if not enough stock
        if (amount > results[0].stock_quantity) {
            console.log("I'm sorry there is not enough of that product in stock")
            startQuestions()
        }
        // if enough stock gives current total and starts questions over again
        else {
            var newQuantity = results[0].stock_quantity - amount;
             cost = cost + results[0].price * amount
            connection.query("UPDATE products SET stock_quantity = ? WHERE id =?", [newQuantity, identifier], function (err, results, fields) {

            });
console.log("Your total Bill is " + cost + " dollars.")
            startQuestions()
        }
    });
}
// displays the info from the mysql database in a table
var displayTable = function () {
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        


        // console.log("\n" + "ID Product          Department          Price   Quantity /n")
        console.log("\n")
         for (i=0; i< result.length; i++) {

    
             console.log("Department: "  + result[i].department_name + "\n " + "ID Price Quantity Product" +"\n"  + " " + result[i].id + "    "+ result[i].price + "      "+ result[i].stock_quantity + "    " + result[i].product_name + "\n" )};

    });
    
   
    bid()
}
// function that starts questions after table is displayed if yes moves on to next question else terminates
var startQuestions = function () {
    inquirer.prompt({
        name: "decision",
        type: "list",

        message: " Would like to continue shopping?\n",
        choices: ["Yes", "No"]
    }).then(function (answer) {
        switch (answer.decision) {
            case 'Yes':
                displayTable();
                break;

            case 'No':
            console.log("Thank you for shopping with us!")
                connection.end();
                break;
        }
    })

}
// calls function to start the program
startQuestions();