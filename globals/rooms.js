'use strict';

const shutterConfig = {
  fullCloseMs: 19000,
};

module.exports = [
  {
    id: 'kinderzimmer',
    label: 'Kinderzimmer',
    shutters: [
      {
        id: 'rolladen',
        label: 'Rolladen',
        powerGpio: 6,
        directionGpio: 12,
        ...shutterConfig,
        triggerButtons: [
          'rolladen'
        ],
        triggerWindows: [
          'rolladen',
        ],
      }
    ],
    windows: [
      {
        id: 'rolladen',
        label: 'Fenster',
        gpio: 22,
      }
    ],
    buttons: [
      {
        id: 'rolladen',
        label: 'Rolladen Schalter',
        gpio: 23,
      }
    ],
  },
  // {
  //   id: 'arbeitszimmer',
  //   label: 'Arbeitszimmer',
  //   shutters: [
  //     {
  //       id: 'main',
  //       label: '',
  //       powerGpio: null,
  //       directionGpio: null,
  //       ...shutterConfig,
  //     }
  //   ],
  //   windows: [
  //     {
  //       id: 'main',
  //       label: 'Fenster'
  //     }
  //   ]
  // },
  {
    id: 'schlafzimmer',
    label: 'Schlafzimmer',
    shutters: [
      {
        id: 'rolladen',
        label: 'Rolladen',
        powerGpio: 26,
        directionGpio: 20,
        switchGpio: 16,
        ...shutterConfig,
        triggerButtons: [
          'rolladen'
        ],
        triggerWindows: [
          'rolladen',
        ],
      }
    ],
    windows: [
      {
        id: 'rolladen',
        label: 'Fenster',
        gpio: 19,
      }
    ],
    buttons: [
      {
        id: 'rolladen',
        label: 'Rolladen Schalter',
        gpio: 16,
      }
    ],
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
        powerGpio: 18,
        speedGpio: 27,
        minHumidityThreshold: 70,
        maxHumidityThreshold: 85,
        minRunTime: 120,
        lightTimeout: 300,
        trailingTime: 120,
        triggerLights: [
          'main'
        ],
      }
    ],
  },
  {
    id: 'wc',
    label: 'WC',
    lights: [
      {
        id: 'main',
        label: 'Licht',
        gpio: 21,
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
        minRunTime: 120,
        lightTimeout: 300,
        trailingTime: 120,
        triggerLights: [
          'main'
        ],
      }
    ],
  },
];
