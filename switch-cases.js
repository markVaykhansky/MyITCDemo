function switchOnBinary(num) {
    switch(num) {
        case 0:
            console.log('0 was passed');
            break;
        case 1:
            console.log('1 was passed');
            break;
        default:
            throw new Error('Non-binary value');
    }
}

//switchOnBinary(0);
//switchOnBinary(1);
//switchOnBinary(2);
















// ENUM
const Seasons = {
	Summer: 'Summer',
	Autumn: 'Autumn',
	Winter: 'Winter',
	Spring: 'Spring'
}

function getDressingAdvice(season) { 
    switch(season) {
        case Seasons.Summer:
            console.log("Wear shirts");
            break;
        case Seasons.Autumn:
            console.log("Wear light coat");
            break;
        case Seasons.Winter:
            console.log("Wear boots");
            break;
        case Seasons.Spring:
            console.log("Wear something cool");
            break;
        default:
            console.log("Invalid season");
    }
}

getDressingAdvice('');






























function switchOnObject(employee) {
    const { employeeStatus } = employee;

    switch(employeeStatus) {
        case 'worker':
            // ToDo: ...
            break;
        case 'manager':
            // ToDo: ...
        case 'director':
            // ToDo: ...
            break;
        case 'CEO':
            // ToDo: ...
            break;
        default:
            console.log('Invalid employee type');
    }
}