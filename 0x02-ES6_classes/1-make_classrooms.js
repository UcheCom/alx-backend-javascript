import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomList = [];
  const roomSizes = [19, 20, 34];

  for (const size of roomSizes) {
    roomList.push(new ClassRoom(size));
  }
  return roomList;
}
