export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }
  const y = objArray.map((objArray) => objArray.id);
  return y;
}
