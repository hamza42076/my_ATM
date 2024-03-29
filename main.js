#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let pin = 1050;
let account_code = 1234;
let account_num = await inquirer.prompt([
    {
        name: "code",
        type: "number",
        message: "Enter your account number",
    },
]);
if (account_num.code === account_code) {
    console.log("LOGIN SUCCESSFULLY! ");
}
let pinNumber = await inquirer.prompt([
    {
        name: "welcome",
        type: "string",
        message: "welcome to my ATM"
    },
    {
        name: "pin",
        type: "number",
        message: "Enter your pincode",
    }
]);
if (pinNumber.pin === pin) {
    console.log("LOGIN SUCCESSFULLY! ");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select the Option",
            choices: ["withdraw", "check balance",]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log(`Now Your remaning balance is! ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Please try again, becasue your pincode is incorrect! ");
}
