'use strict';

const config = require('../smart-home/config');

const shutters = [];

const thisRooms = [
  'Arbeitszimmer',
  // 'Schlafzimmer',
  // 'Kinderzimmer'
];

for(const room of config) {
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

module.exports = {shutters};