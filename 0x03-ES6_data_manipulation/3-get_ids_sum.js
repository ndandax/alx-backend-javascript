export default function getStudentIdsSum(list) {
  const y = list.reduce((accumulator, list) => accumulator + list.id, 0);
  return y;
}
