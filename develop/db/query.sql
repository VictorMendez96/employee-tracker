-- Create queries that can be reused or called at start so you do not have to wait for data to load
SELECT departments.name AS department, roles.title
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id
ORDER BY departments.name;

SELECT roles.title AS role, employees.id 
FROM employees
LEFT JOIN roles
ON roles.id = role_id;

SELECT A.id AS employee1, B.id AS employee 2, A.manager_id
FROM employee A, employee B
WHERE A.id <> B.id
AND A.manager_id = B.manager_id
ORDER BY A.manager_id;