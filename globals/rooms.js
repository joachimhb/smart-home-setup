'use strict';

const shutterConfig = {
  fullCloseMs: 7000,
};

module.exports = [
  {
    id: 'kinderzimmer',
    label: 'Kinderzimmer',
    shutters: [
      {
        id: 'main',
        label: '',
        powerGpio: 6,
        directionGpio: 12,
        ...shutterConfig,
      }
    ],
    windows: [
      {
        id: 'main',
        label: 'Fenster',
      }
    ]
  },
  {
    id: 'arbeitszimmer',
    label: 'Arbeitszimmer',
    shutters: [
      {
        id: 'main',
        label: '',
        powerGpio: 19,
        directionGpio: 16,
        ...shutterConfig,
      }
    ],
    windows: [
      {
        id: 'main',
        label: 'Fenster'
      }
    ]
  },
  {
    id: 'schlafzimmer',
    label: 'Schlafzimmer',
    shutters: [
      {
        id: 'main',
        label: '',
        powerGpio: 26,
        directionGpio: 20,
        ...shutterConfig,
      }
    ],
    windows: [
      {
        id: 'main',
        label: 'Fenster'
      }
    ]
  },
  {
    id: 'bad',
    label: 'Bad',
    dht22: {
      gpio: 4,
    },
    lights: [
      {
        id: 'main',
        label: 'Licht',
        gpio: 17,
      },
    ],
    fans: [
      {
        id: 'lueftung',
        label: 'Lüftung',
        powerGpio: 22,
        speedGpio: 23,
        minHumidityThreshold: 70,
        maxHumidityThreshold: 85,
        minRunTime: 1,
        lightTimeout: 3,
        trailingTime: 2,
        triggerLights: [
          'main'
        ],
      }
    ],
  },
];
