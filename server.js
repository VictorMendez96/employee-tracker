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

