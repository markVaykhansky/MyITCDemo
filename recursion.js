// What's the idea of recursion?
// What's bad about recursion?
// What's good about recursion?
// Any recursion can be re-written


// sumFromOneUntil(1) = 1
// sumFromOneUntil(2) = 3 = 1 + 2 = sumFromOneUntil(1) + 2

// f(n) = f(n - 1) and then do something simple

// [1 + 2 + 3 + .... (i -1)] + i

// sum(5) = sum(4) + 5


/**
 
    sumFromOneUntil(5) 
    = sumFromOneUntil(4) + 5 
    = (sumFromOneUntil(3) + 4) + 5
    = ((sumFromOneUntil(2) + 3) + 4) + 5
    = (((sumFromOneUntil(1) + 2) + 3) + 4) + 5
    = (((1 + 2) + 3) + 4) + 5

 */

function sumFromOneUntil(i) {
    if(i === 1) return 1; // Stop

    return sumFromOneUntil(i - 1) + i; 
}

// Second exercise

//  A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
// Implement a method to count how many possible ways the child can run up the stairs.

// countPossabilities(2) = [[2], [1, 1]]

function countPossabilities(numberOfStepsLeft) {
    if(numberOfStepsLeft < 0) return 0;

    if(numberOfStepsLeft === 0) return 1;
    
    return countPossabilities(numberOfStepsLeft - 1) + // [1,....] The number of possible steps to take after jumping exactly one step
            countPossabilities(numberOfStepsLeft - 2) + // [2,....] The number of possible steps to take after jumping exactly two steps
            countPossabilities(numberOfStepsLeft - 3); // [3,...]  The number of possible steps to take after jumping exactly tree steps
}