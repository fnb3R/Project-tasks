// You’re given 2 out of 3 angles in a triangle (in degrees). 
// Write a function that classifies the missing angle as either “acute”, “right” or “obtuse” based on its degrees.

function findMissingAngle(angle1, angle2) {
    let missingAngle = 180 - (angle1 + angle2);

    if(missingAngle < 90) {
        return "acute";
    } else if (missingAngle === 90) {
        return "right";
    } else {
        return "obtuse";
    }
}

console.log(findMissingAngle(50, 60));  // "acute" 
console.log(findMissingAngle(40, 40));  // "obtuse" 
console.log(findMissingAngle(60, 30));  // "right" 