function task2 () {
    let a = prompt ("Input a for triangle sides length");
    let b = prompt ("Input b for triangle sides length");
    let c = prompt ("Input c for triangle sides length");
    

    if ((a==="" || b ==="" || c==="") || (a===undefined || b===undefined || c===undefined) || (isNaN(a) || isNaN(b) || isNaN(c))){
        alert("input values should be ONLY numbers");
        alert("Triangle doesn’t exist");
        return false;
    }
    if ( a==0 || b==0 || c == 0){
        alert("A triangle must have 3 sides with a positive definite length");
        alert("Triangle doesn’t exist");
        console.log("Triangle doesn’t exist");
        return false;
    }
    if ( a == b && b == c && a == b ) {
        console.log("Equilateral triangle");
    }
    if ( a !== b && b !== c && c !==a) {
        console.log("Scalene triangle");
    }
    if ((a!==b && b===c) || (a===b && b!==c)){
        console.log("Isosceles triangle");
    }
}

task2();

