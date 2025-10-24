'use strict';

const shutterConfigBack = {
  fullCloseMs: 19000,
  windowOpenValue: 80,
};

const shutterConfigFront = {
  fullCloseMs: 24000,
  windowOpenValue: 80,
};

// GPIOS USED
// ARBEITSZIMMER
// 6,
// 12,
// 22,
// 23,
// 26
// 20,
// 19,
// 16

module.exports = [
  {
    id: 'kinderzimmer',
    label: 'Kinderz.',
    shutters: [
      {
        id: 'rolladen',
        label: 'Rolladen',
        powerGpio: 6,
        directionGpio: 12,
        ...shutterConfigBack,
      }
    ],
    windows: [
      {
        id: 'fenster',
        label: 'Fenster',
        gpio: 22,
      }
    ],
    buttons: [
      {
        id: 'rolladen-taster',
        label: 'Rolladen Taster',
        gpio: 23,
        interval: 100,
      }
    ],
  },
  {
    id: 'arbeitszimmer',
    label: 'Arbeitsz.',
    shutters: [
      {
        id: 'rolladen',
        label: 'Rolladen',
        powerGpio: 9,
        directionGpio: 25,
        ...shutterConfigBack,
      }
    ],
    windows: [
      {
        id: 'fenster',
        label: 'Fenster',
      }
    ],
  },
  {
    id: 'schlafzimmer',
    label: 'Schlafz.',
    dht22: [
      {
        id: 'eck',
        gpio: 15,
      }
    ],
    shutters: [
      {
        id: 'rolladen',
        label: 'Rolladen',
        powerGpio: 26,
        directionGpio: 20,
        ...shutterConfigBack,
      }
    ],
    windows: [
      {
        id: 'fenster',
        label: 'Fenster',
        gpio: 19,
      }
    ],
    buttons: [
      {
        id: 'rolladen-taster',
        label: 'Rolladen Taster',
        gpio: 16,
        interval: 100,
      }
    ],
  },
  {
    id: 'bad',
    label: 'Bad',
    dht22: [
      {
        id: 'main',
        gpio: 4,
      }
    ],
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
        trailingTime: 60,
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
        trailingTime: 60,
      }
    ],
  },
  {
    id: 'wohnzimmer',
    label: 'Wohnzimmer',
    dht22: [
      {
        id: 'main',
        gpio: 3,
      }
    ],
    shutters: [
      {
        id: 'rolladen-pflanzen',
        label: 'R. Pflanzen',
        powerGpio: 14,
        directionGpio: 4,
        ...shutterConfigFront,
      },
      {
        id: 'rolladen-essbereich',
        label: 'R. Essbereich',
        powerGpio: 18,
        directionGpio: 17,
        ...shutterConfigFront,
      },
      {
        id: 'rolladen-front',
        label: 'R. Front',
        powerGpio: 23,
        directionGpio: 22,
        ...shutterConfigFront,
      },
      {
        id: 'rolladen-balkon',
        label: 'R. Balkon',
        powerGpio: 8,
        directionGpio: 11,
        ...shutterConfigFront,
        fullCloseMs: 32000,
      }
    ],
    windows: [
      {
        id: 'pflanzen',
        label: 'Pflanzen',
      },
      {
        id: 'essbereich',
        label: 'Essbereich',
      },
      {
        id: 'front',
        label: 'Front',
      },
      {
        id: 'balkon',
        label: 'Balkon',
      }
    ]
  },
];
