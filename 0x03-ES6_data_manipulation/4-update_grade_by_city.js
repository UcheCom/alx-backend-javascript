export default function updateStudentGradeByCity(studentData, city, newGrades) {
  const sanFstudents = studentData.filter((x) => x.location === city);
  const newData = sanFstudents.map((x) => {
    const studentId = newGrades.find((entry) => entry.studentId === x.id);
    if (studentId) {
      return {
        ...x,
        grade: studentId.grade,
      };
    }
    return { ...x, grade: 'N/A' };
  });

  return newData;
}
