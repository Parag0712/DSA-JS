let a = ["parag","samarth","nihar","smith","nahar"]

function findName(allStudent,studentname){
    for (let index = 0; index < allStudent.length; index++) {
        console.time('findName');
        if(studentname == allStudent[index]){
            console.log("Student found at",index);
            break;
        }        
    }
    console.timeEnd('findName');
}

// find Rec
function findNameRec(allStudent, studentname, index = 0) {
    console.time('findNameRec');
    const result = (function recursiveFind(allStudent, studentname, index) {
        if (index >= allStudent.length) {
            return -1; // Base case: student not found
        }
        if (studentname === allStudent[index]) {
            return `Student Found ${studentname} at index ${index}`; // Student found
        }
        return recursiveFind(allStudent, studentname, index + 1); // Recursive call
    })(allStudent, studentname, index);
    console.log(result);
    console.timeEnd('findNameRec');
}

console.log(findName(a,"parag") + "\n");
console.log(findNameRec(a,"parag"));