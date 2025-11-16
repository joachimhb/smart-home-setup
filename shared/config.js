const rooms = require('./rooms.js');

module.exports = {
  mqttBroker: 'tcp://172.17.1.51:1883',
  rooms,
  influxDb: {
    url: 'http://172.17.1.45:8086',
    token: 'influxdb-jhb-1337-token',
    bucket: 'smarthome',
    org: 'jhb',
  }
}
