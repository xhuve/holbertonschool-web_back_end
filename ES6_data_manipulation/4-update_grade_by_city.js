module.exports = function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((x) => x.location === city)
    .map((student) => {
      const newStudent = student;
      const newGrade = newGrades.filter((grades) => grades.studentId === student.id)[0];

      // eslint-disable-next-line no-prototype-builtins
      if (newGrade && newGrade.hasOwnProperty('grade')) { newStudent.grade = newGrade.grade; } else { newStudent.grade = 'N/A'; }

      return newStudent;
    });
};
