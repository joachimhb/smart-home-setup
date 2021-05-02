'use strict';

const rooms = require('../smart-home/rooms');
const globals = require('../../../globals');

const shutters = [];

const thisRooms = [
  'Arbeitszimmer',
  // 'Schlafzimmer',
  // 'Kinderzimmer'
];

for(const room of rooms) {
  if(room.shutters && thisRooms.includes(room.label)) {
    for(const shutter of room.shutters) {
      shutters.push({
        room: {
          id: room.id,
          label: room.label,
        },
        ...shutter,
      });
    }
  }
}

module.exports = {
  shutters,
  globals,
};