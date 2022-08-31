// Why do we need objects?
// How would you represent a user / employee?

const employee = {
    firstName: 'John',
    lastName: 'Doe',
    tenure: '15 Years',
    obj: {
        anotherObject: {
            someKey: 'someValue',
        }
    },
    age: 36,
    email: 'john@stanford.edu',
    phoneNumber: '+954300000',
    title: 'Teacher',
    id: 1,
    hourlySalary: 50,
    department: 'Education'
};

console.log(employee.obj)

//console.log(employee['firstName']);

const keys = Object.keys(employee);

keys.forEach((key) => {
   // console.log(employee[key]);
});


// Accessing objects
// Cloning objects
// Array of objects