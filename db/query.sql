-- Create queries that can be reused or called at start so you do not have to wait for data to load

-- Query joins Departments with roles and displays table
SELECT department.name AS department, role.title
FROM role
LEFT JOIN department
ON role.department_id = department.id
ORDER BY department.name;

-- Query joins Title with Role ID
SELECT role.title AS role, employee.first_name, employee.last_name, employee.id 
FROM employee
LEFT JOIN role
ON employee.role_id = role.id;

-- Query self joins employee table to show employee by manager 
SELECT A.first_name, A.last_name, A.id AS employee, B.last_name AS manager
FROM employee A, employee B
WHERE A.id <> B.manager_id
AND A.manager_id = B.id
ORDER BY A.manager_id;