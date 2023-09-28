import Classroom from './0-classroom';

export default function initializeRooms() {
  const instance1 = new Classroom(19);
  const instance2 = new Classroom(20);
  const instance3 = new Classroom(34);
  const arr = [instance1, instance2, instance3];
  return arr;
}
