// eslint-disable-next-line no-undef
module.exports = function updateStudentGradeByCity(arr, city, newGrades) {
    return arr.filter((x) => x.location == city)
    .map((student) => {
        const newArr = newGrades.filter((grades) => grades.studentId == student.id)[0]
        
        // eslint-disable-next-line no-prototype-builtins
        if (newArr && newArr.hasOwnProperty('grade'))
            student.grade = newArr.grade
        else 
            student.grade = "N/A"

        return student
    })
}