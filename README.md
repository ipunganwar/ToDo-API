# Todo-Fancy API
API untuk Todos-Fancy

#API
List of basic routes :

**Route**		| **HTTP** | **Description**
----------|----------|------------
/api/tasks/find | GET | To get all list task
/api/tasks/add | POST | To add new task
/api/tasks/update?id="{id}"  | PUT | To edit task by {id}
/api/tasks/delete?id="{id}" | DELETE | To delete task by {id}

List of filter routers:

Route | HTTP | Description
-------|------|------------
/api/tasks/find?id="{id}"  | GET | To get task by {id}


List of user routes:

Route | HTTP | Description
------|------|------------
/api/users/register | POST | Register as new user
/api/users/me | GET | Get a user information
/api/users/login | POST | Login into Dashboard



# USAGE
With only npm:

> npm install
> npm start
> npm run dev

Access the website API via http://localhost:3000/api 
