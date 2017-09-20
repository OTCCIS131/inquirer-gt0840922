var inquirer = require('inquirer');
console.log ("Welcome to Petey's Pizza Palace of Pizzaz.")
console.log ("Our phone number is 1-888-555-9222")

let questions = [{
    name: "Size",
    message: "What size is the Pizza?",
    type: "list",
    choices: ["Small", "Medium", "Large", "Extra Large"],
},{
    name: "Toppings",
    message: "What kind of toppings do you want for your Pizza?",
    type: "checkbox",
    choices: ["Pepperoni", "Sausage", "Canadian Bacon", "Supreme", "N/A (Cheese)"],
},{
    name: "Sauce",
    message: "What kind of dipping sauce do you want for your Pizza?",
    type: "list",
    choices: ["Marinara", "Cheese", "N/A", "Horse Radish", "Chili", "Honey"],
}]

inquirer.prompt(questions).then(function (answers) {
    console.log ("You ordered a/n " + answers.Size + " Pizza.")
    console.log ("Your Pizza topping/s is/are " + answers.Toppings + ".")
    console.log ("You wanted " + answers.Sauce + " dipping sauce for your Pizza.")

    let correct = [{
        name: "Correct",
        message: "Is this Correct?",
        type: "confirm",
    }]

    inquirer.prompt(correct).then(function (answers) {        
        if (answers.Correct == true){
            console.log (answers.Correct + "? Well, that's good.")
        }
        
        else{
            console.log (answers.Correct + "? Oh, we apologize for that.")
        }
        
    });
});
