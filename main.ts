#!/usr/bin/env node


import inquirer from "inquirer";
 
let myBalance = 10000
let pin = 1050
let account_code =1234

let account_num= await inquirer.prompt(
    [
        
            {
                name:"code",
                type:"number",
                message:"Enter your account number",
            },

        
    ]
);
if (account_num.code === account_code){
    console.log("LOGIN SUCCESSFULLY! ")
}



let pinNumber = await inquirer.prompt(
    [


        {
            name:"welcome",
            type:"string",
            message:"welcome to my ATM"
        },
       {
        name:"pin",
        type:"number",
        message:"Enter your pincode",
       } 
    ]
);
if (pinNumber.pin ===pin ) {
    console.log("LOGIN SUCCESSFULLY! ");
    let operationAns = await inquirer.prompt(
        [
            {
                name:"option",
                type:"list",
                message:"Select the transition method",
                choices:["current","saving"]
            },

            {
                name:"operation",
                type:"list",
                message:"please select the Option",
                choices:["fast cash","withdraw","check balance",]
            }
        ]
    );
    if(operationAns.operation === "withdraw"){
        let amountAns =await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter your amount",
                    type:"number",
                },
                
            ]
        );
        
       
        
        myBalance -= amountAns.amount
        console.log(`Now Your remaning balance is! ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);   
    }
    else if (operationAns.operation === "fast cash"){
        let fastcash = await inquirer.prompt(
            [
                {
                    name:"cash",
                    type:"list",
                    message:"Select your option! ",
                    choices:[500,1000,2000,5000,10000]
                    
                }
            ]
        );
        
        myBalance -= fastcash.cash
        console.log(`Now Your remaning balance is! ${myBalance}`);
        
    }
    

}
else{
    console.log("Please try again, becasue your pincode is incorrect! ");
}
