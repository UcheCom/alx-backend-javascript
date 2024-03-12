export default getStudentIdsSum(students) {
  const numOfStudents = students.reduce(
    (cumulative, currentVal) => currentVal.id + cumulative, 0,
  };
  return numOfStudents;
}
