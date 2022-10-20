// Import required modules
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer')

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
                viewDepartments()
            } else if (response.menuOption == 'View all roles'){
                viewRoles()
            } else if (response.menuOption == 'View all employees'){
                viewEmployees()
            } else if (response.menuOption == 'Add a department'){
                addDepartment()
            } else if (response.menuOption == 'Add a role'){
                addRole()
            } else if (response.menuOption == 'Add an employee'){
                addEmployee()
            } else if (response.menuOption == 'Update an employee role'){
                updateERole()
            }
        });
}

// Functions for Menu Options
// View all departments
function viewDepartments() {
    // Department names and ids
    db.query(`SELECT * FROM department;`, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log('Here are all departments:');
        console.table(res);
        menu(); 
    })
    
};

// View all roles
function viewRoles() {
    // Title, role id, department role belongs to, and salary
    db.query(`SELECT * FROM roles;`, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log('Here are all roles:');
        console.table(res);
        menu(); 
    })
};

// View all employees
function viewEmployees() {
    // Employee id, first & last name, job title, department, salary, and manager
    db.query(``, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log();
        console.table(res);
        menu(); 
    })
};

// Add a Department
function addDepartment() {
    // Ask new department name
    menu();
};

// Add a role
function addRole() {
    // Ask new role name, salary and department
    menu();
};

// Add an employee
function addEmployee() {
    // Ask new employee first name, last name, role, and manager
    menu();
}

// Update an employee role
function updateERole() {
    // Ask to select employee to update and new role
    menu();
}

// Bonus options: 
// Update employee manager
function updateEManager() {
    db.query(``, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log();
        console.table(res);
        menu(); 
    })
}

// View employees by manager
function viewEmpByManager() {
    db.query(``, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log();
        console.table(res);
        menu(); 
    })
}

// View employees by department
function viewEmpByDept() {
    db.query(``, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log();
        console.table(res);
        menu(); 
    })
}

// Delete department
function delDepartment() {

}

// Delete role
function delRole() {

}

// Delete employee
function delEmployee() {

}

// View total utilized budget per department
function viewUtilized() {
    db.query(``, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log();
        console.table(res);
        menu(); 
    })
}

// Call init function 
init (); 