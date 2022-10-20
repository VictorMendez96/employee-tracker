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
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'View employees by manager']
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
            } else if (response.menuOption == 'View employees by manager'){
                viewEmpByManager()
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
    db.query(`SELECT role.id, role.title AS role, role.salary, department.name AS department
        FROM department 
        LEFT JOIN role
        ON department_id = department.id
        ORDER BY role.id;`, (err, res) => {
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
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, employee.manager_id AS manager
        FROM employee 
        JOIN role 
        ON role.id = employee.role_id 
        JOIN department 
        ON role.department_id = department.id 
        ORDER BY employee.id;`, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log('Here are all employees:');
        console.table(res);
        menu(); 
    })
};

// Add a Department
function addDepartment() {
    // Ask new department name
    inquirer
        .prompt([
            {
                name: 'newDept',
                type: 'input',
                message: 'Enter the new department name:',
                default: 'Information Technology'
            }
        ])
        .then(function (response) {
            const sql = `INSERT INTO department (name)
                VALUES (?);`;
            const dept = response.newDept;

            db.query(sql, dept, (err, res) => {
                if(err) {
                    console.log(err)
                };
                viewDepartments();
            });
            menu();
        })
    
};

// Add a role
function addRole() {
    // Ask new role name, salary and department
    inquirer
        .prompt([
            {
                name: 'newRole',
                type: 'input',
                message: 'Enter name of new role:',
                default: 'Assistant Regional Manager'
            },
            {
                name: 'salary',
                type: 'number',
                message: 'Enter salary for this new role:',
                default: '25000'
            },
            {
                name: 'dept',
                type: 'number',
                message: 'What department id does this role belong to:',
                default: '2'
            },
        ])
        .then(function (response) {
            const sql = `INSERT INTO role (title, salary, department_id)
            VALUES (?, ?, ?)`
            const newRole = response.newRole
            const salary = response.salary
            const dept = response.dept

            db.query(sql, newRole, salary, dept, (err, res) => {
                if(err) {
                    console.log(err)
                };
                viewRoles();
            });
        })
    
};

// Add an employee
function addEmployee() {
    // Ask new employee first name, last name, role, and manager
    inquirer
        .prompt([
            {
                name: 'firstn',
                type: 'input',
                message: 'Enter first name of new employee:',
                default: 'Michael'
            },
            {
                name: 'lastn',
                type: 'input',
                message: 'Enter last name of new employee:',
                default: 'Scarn'
            },
            {
                name: 'role',
                type: 'number',
                message: 'Enter role id for new employee:',
                default: '3'
            },
            {
                name: 'managerId',
                type: 'number',
                message: 'Enter manager id for new employee:',
                default: '1'
            }
        ])
        .then(function (response) {
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES (?, ?, ?, ?)`
            const firstName = response.firstn
            const lastName = response.lastn
            const role = response.role
            const managerId = response.managerId

            db.query(sql, firstName, lastName, role, managerId, (err, res) => {
                if(err) {
                    console.log(err)
                };
                viewEmployees();
            })
        })
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
    
}

// View employees by manager
function viewEmpByManager() {
    db.query(`SELECT A.first_name, A.last_name, A.id AS employee, B.last_name AS manager
        FROM employee A, employee B
        WHERE A.id <> B.manager_id
        AND A.manager_id = B.id
        ORDER BY A.manager_id;`, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log('Here are all employees sorted by manager:');
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