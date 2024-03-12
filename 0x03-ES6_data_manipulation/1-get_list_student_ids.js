export default function getListStudentIds(objarr) {
  let arrIds = [];
  if (!Array.isArray(objarr)) return arrIds;

  arrIds = objarr.map((y) => y.id);
  return arrIds;
}
