function Employee (name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle; 
    this. salary = salary; 
    this.status = status;
    if (status === undefined){
        this.status = "full-time";
    }
    this.printEmployeeForm = function (){
        console.log(this.name + " is a " + this.jobTitle + " making " + this.salary + " and is " + this.status);
    }
}

var newEmployee = new Employee ("Laney", "Director of Marketing", "60k"); 

var employees = [];
// for (var i = 0; i < 1; i++) {  
    var laney = new Employee("Laney", "Director of Marketing", "60k");
    employees.push(newEmployee);
    var bob = new Employee("Bob", "V-school Instructor", "3000\/hour", "part-time");
    employees.push(newEmployee);
    var brooke = new Employee("Brooke", "bio-tech", "300\/hour", "part-time");
    employees.push(newEmployee);
// }

var addToEmployees = function (){
    console.log(employees);
}

laney.printEmployeeForm();
bob.printEmployeeForm();
brooke.printEmployeeForm();

addToEmployees ();