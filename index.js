// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
       type:"input",
       name:"Title",
       message: "What is the name of your project ?"
      
    },
    {
        type:"input",
        name: "Description",
        message: "Give a description of your application."
       
     },
     {
        type:"input",
        name:"Installation",
        message: "What are the installation instructions ?"
       
     },
     {
        type:"input",
        name:"Usage",
        message: "How do you use your application ?"
      
     },
     {
        type:"input",
        name:"Contributions",
        message: "Who contributed to this application ?"
        
     },
     {
        type:"input",
        name:"Test",
        message: "How do you test this application ?"
        
     },
     {
        type:"list",
        name:"License",
        message: "What license for your application ?",
        choices: ["MIT","None"]
        
     },
     {
        type:"input",
        name:"GitHub",
        message: "What is your Github user name ?"
       
     },
     {
        type:"input",
        name:"Email",
        message: "What is your email address ?"
        
     },
   
   ]
// TODO: Create a function to write README file
function runQuery() {
   return inquirer.prompt (questions)
   .then((data) => {
       console.log('File Created')
       return data
   })
   .catch((error) => {
       console.log(error)
   })
}

runQuery()



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
