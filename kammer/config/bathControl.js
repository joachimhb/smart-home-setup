'use strict';

module.exports = {
  port: 3000,
  bath: {
    gpios: {
      fan: {
        power: 18,
        speed: 27
      },
      light: 17,
      dht22: 4,
    }
  },
  wc: {
    gpios: {
      fan: {
        power: 22,
        speed: 23
      },
      // dht22: 24,
      // light: 10,
    }
  }
};
