// Import required modules
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const { default: Choices } = require('inquirer/lib/objects/choices');

// Establish PORT to use for connection
const PORT = process.env.PORT || 3001;

// Initiate express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        password: 'ElidanDany14!',
        database: 'employee_db'
    },
    console.log('Connected to employee_db database!')
);

// init function to start program
function init() {

    menu();
}

// Function for menu
function menu() {
    inquirer
        .prompt([
            {
                name: 'menuOption',
                type: 'list',
                message: 'Choose an action: ',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
            }
        ])
        .then(function (response) {
            if(response.menuOption == 'View all departments'){

            } else if (response.menuOption == 'View all roles'){

            } else if (response.menuOption == 'View all employees'){

            } else if (response.menuOption == 'Add a department'){

            } else if (response.menuOption == 'Add a role'){

            } else if (response.menuOption == 'Add an employee'){

            } else if (response.menuOption == 'Update an employee role'){

            }
        });
}

// Functions for Menu Options
// View all departments

    // Department names and ids

// View all roles

    // Title, role id, department role belongs to, and salary

// View all employees

    // Employee id, first & last name, job title, department, salary, and manager

// Add a Department

    // Ask new department name

// Add a role

    // Ask new role name, salary and department

// Add an employee

    // Ask new employee first name, last name, role, and manager

// Update an employee role

    // Ask to select employee to update and new role


// Bonus options: 
// Update employee manager

// View employees by manager

// View employees by department

// Delete department

// Delete role

// Delete employee

// Total utilized budget per department


// Call init function 
init (); 