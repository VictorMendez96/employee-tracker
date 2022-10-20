-- Tell sql where the seeds go
USE employee_db

-- INSERT seeds into department
INSERT INTO department (name)
VALUES  ("RECEPTION"),
        ("SALES"),
        ("HUMAN RESOURCES"),
        ("WAREHOUSE"),
        ("ACCOUNTING");

-- INSERT seeds into role 
INSERT INTO role (title, salary, department_id)
VALUES  ("Office Manager", 20000, 1),
        ("Receptionist", 18000, 1),
        
        ("Sales Person", 35000, 2),
        ("Assistant to the RM", 35000, 2),
        ("Regional Manager", 40000, 2),

        ("Human Resources Manager", 35000, 3),
        ("Human Resources Specialist", 30000, 3),

        ("Warehouse Manager", 38000, 4),
        ("Warehouse Employee", 25000, 4),

        ("Accounting Manager", 35000, 5),
        ("Accounting Lead", 31000, 5),
        ("Accountant", 28000, 5);


-- INSERT seeds into employee 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Michael", "scott", 5, 0),
        ("Dwight", "Schrute", 4, 1),
        ("Jim", "Halpert", 3, 1),
        ("Pam", "Beasley", 1, 1),
        ("Stanley", "Hudson", 3, 1),
        ("Phyllis", "Lapin", 3, 1),
        ("Angela", "Martin", 10, 1),
        ("Oscar", "Gutierrez", 11, 7),
        ("Kevin", "Malone", 12, 7),
        ("Toby", "Flenderson", 6, 1),
        ("Erin", "Hannon", 2, 1);