# bamazon
# liri-node-app
A node.js app pulling from a mysql database and asks the user questions to submit an order from the products in the database.
## Questions asked of the customer
1. Would you like to buy something?
2. What do you want to buy?
3. What quantity do they want?
4. Do they want to buy something else?
  
________________________________________________________________________________________________________________________________________

## starting the code
This is what displays when the code is first run.
![Start of node app] (images/start-this.PNG?raw=true "Start of the node app")

## User picks a product to purchase
If the user selects yes the products will be displayed for them to pick from and they will then be prompted to select an id.
![Pick ID] (images/display-this.PNG?raw=true "Pick ID")
## User is prompted to select promity
If the user asks for a quantity that is more than the stock quantity they will be informed of this and redirected to the beginning and asked if they want to continue shopping.
![Insufficiant quantity] (images/exceededQuantity-this.PNG?raw=true "Insufficiant quantity")
If there is enough quantity they will be informed of their bill total and then redirected if they want to continue shopping.
![Sufficient Quantity] (images/sufficientQuantity-this.PNG?raw=true "Sufficient Quantity")
## User elects not to continue shopping
If at any point the user decides to to stop shopping when prompted they will be thanked for shopping and exit the app.
![End] (images/end-this.PNG?raw=true "End")
   
#### To utilize this in the command terminal enter node liri-node-app concert-this "Your artist choice here"
See example below

![Concert-this example](images/concert-this.PNG?raw=true "concert-this example")


