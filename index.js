var inquirer = require('inquirer');
let questions = [{
    name: "Size",
    message: "What size is the Pizza?",
    choices: ["Small", "Medium", "Large", "Extra Large"],
},{
    name: "Toppings",
    message: "What kind of toppings do you want for your Pizza?",
    choices: ["Pepperoni", "Sausage", "No toppings", "Caanadian Bacon", "Supreme"],
},{
    name: "Sauce",
    message: "What kind of sauce do you want for your Pizza?",
    choices: ["Marinara", "Cheese"],
}]
inquirer.prompt(questions).then(function (answers) {
    console.log (answers)
});