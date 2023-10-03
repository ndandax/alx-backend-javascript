export default function getStudentsByLocation(list, city) {
  const y = list.filter((list) => list.location === city);
  return y;
}
