class ShoppingItem {
  //a class named ShoppingItem
  constructor(shoppingItemName, shoppingItemPrice) {
    //constructor takes two parameters shoppingItemname and ShoppingItemPrice
    this.itemName = shoppingItemName; //this.itemName takes the value pass through shoppingItemName
    this.itemPrice = shoppingItemPrice; //this.itemPrice takes the value pass through shoppingItemPrice
  }

  description() {
    //method named description
    return `${this.itemName} - $${this.itemPrice}`; //method returns the value of this.itemName and this.itemPrice in a string literal
  }
}

class Menu {
  // a class named Menu
  constructor() {
    //constructor for the class Menu
    this.shoppingItems = []; //this.shopping Items is an empty array made by the constructor
  }

  start() {
    //a method named start
    let selection = this.showMainMenuOptions(); //variable selections takes the value returned from the showMainMenuOptions method
    while (selection != 0) {
      //while loop runs as long as the value of selections is not 0
      switch (
        selection //switch statement passing value of selection
      ) {
        case '1': //case 1 executes the method newListItem
          this.newListItem();
          break;
        case '2': //case 2 executes the method deleteListItem
          this.deleteListItem();
          break;
        case '3': //case 3 executes the method viewList
          this.viewList();
          break;
        default: //the default case changes the value of selections to 0 when none of the previous cases are met
          selection = 0;
      }
      selection = this.showMainMenuOptions(); //once the switch loop is complete the value of selections executes the showMainMenuOptions method
    }
    alert('See you later!'); //when the value of selections becomes 0 we alert to the user 'See you later and exit the loop
  }

  showMainMenuOptions() {
    //a method named showMainMenuOptions
    return prompt(`
        0) Exit
        1) Add new item
        2) Delete an item
        3) View items
        `); //the method showMainMenuOptions returns a prompt with a string literal showing the menu options
  }

  newListItem() {
    // a method named newListItem
    let newItemName = prompt('Enter new item name:'); //variable newItemName takes the value of a prompt
    this.shoppingItems.push(new ShoppingItem(newItemName)); //we push the value entered by the user on the prompt to the array shoppingItems as a new shopping item using the "new" keyword and the class "ShoppingItem"
  }

  viewList() {
    // a method named viewlist
    let listString = ''; //a variable that takes an empty string as a value
    for (let i = 0; i < this.shoppingItems.length; i++) {
      //for loop to through through the shoppingItems array
      listString += i + ') ' + this.shoppingItems[i].itemName + '\n'; //adds each iterations to the variable listString as a string with the value of the itemName for each index of the array
    }
    alert(listString); //alerts the value of listString to the user
  }

  deleteListItem() {
    //a method named deleteListItem
    let index = prompt('Enter the index of the item to delete'); //variable index takes value of a prompt shown to the user
    if (index > -1 && index < this.shoppingItems.length) {
      //if statement works if the value entered for index is more than -1 and less than the length of the array shoppingItems
      this.shoppingItems.splice(index, 1); //we remove the index entered by the user from the array shoppingItems
    }
  }
}

let menu = new Menu(); //variable menu takes a new Menu() class
menu.start(); //we execute the method start() that comes from the class Menu passed through the variable menu
