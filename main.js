#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosQs = await inquirer.prompt([
        {
            name: "q1", type: "input", message: "What do you want to add in your Todos?"
        },
        {
            name: "q2", type: "confirm", message: "Do you want to add more in your Todos?", default: "true"
        }
    ]);
    todos.push(todosQs.q1);
    condition = todosQs.q2;
}
console.log("Your updated todo-list contain:", todos);
