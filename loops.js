// Assume that you don't know that it's a 4x3 matrix
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

function sumOfDiagonals() {
    let diagonalSum = 0;

    for(let i = 0; i < matrix.length; i++) {
        const value = matrix[i][i];
        diagonalSum += value;
    }

    console.log('Diagonal sum', diagonalSum);
}

function printSumOfEachRow() {
    for(let i = 0; i < matrix.length; i++) {
        const currentRow = matrix[i];
        let rowTotal = 0;

        for(let j = 0; j < currentRow.length; j++) {
            const element = matrix[i][j];
            rowTotal += element;
        }

        console.log('The sum of row ' + i + ' is ' + rowTotal);
    } 
}

//printSumOfEachRow();

// 123
// 456
// 789

function sumOfAllElements() {
    let total = 0;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            total += matrix[i][j];
        }
    }

    return total;
}

//console.log(sumOfAllElements());


function sumOfEachColumn() {

}
// 0 < i < 100
function printAllOddNumbers() {
    for(let i = 1; x && y; i+=2) {
        console.log(i);
    }
}

printAllOddNumbers();

function printAllObjectsWithSpecificEmployeeType(employees, employeeType) {

}

// { id: string, name: string, type: EmployeeType, monthlySalaryInNis: number }

const employees = [];