// Import required modules
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table')

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