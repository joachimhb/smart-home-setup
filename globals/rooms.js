'use strict';

const shutterConfigBack = {
  fullCloseMs: 19000,
  windowOpenValue: 80,
};

module.exports = [
  // {
  //   id: 'arbeitszimmer',
  //   label: 'Arbeitszimmer',
  //   shutters: [
  //     {
  //       id: 'main',
  //       label: '',
  //       powerGpio: null,
  //       directionGpio: null,
  //       ...shutterConfigBack,
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
    id: 'wohnzimmer',
    label: 'Wohnzimmer',
    // shutters: [
    //   {
    //     id: 'main',
    //     label: '',
    //     powerGpio: null,
    //     directionGpio: null,
    //     ...shutterConfigBack,
    //   }
    // ],
    windows: [
      {
        id: 'pflanzen',
        label: 'Pflanzen',
        shutterId: 'rolladen-pflanzen',
      },
      {
        id: 'essbereich',
        label: 'Essbereich',
        shutterId: 'rolladen-essbereich',
      },
      {
        id: 'front',
        label: 'Front',
        shutterId: 'rolladen-front',
      },
      {
        id: 'balkon',
        label: 'Balkon',
        shutterId: 'rolladen-balkon',
      }
    ]
  },
  {
    id: 'kinderzimmer',
    label: 'Kinderzimmer',
    shutters: [
      {
        id: 'rolladen',
        label: 'Rolladen',
        powerGpio: 6,
        directionGpio: 12,
        ...shutterConfigBack,
        triggerButtons: [
          'rolladen-schalter'
        ],
      }
    ],
    windows: [
      {
        id: 'fenster',
        label: 'Fenster',
        gpio: 22,
        shutterId: 'rolladen',
      }
    ],
    buttons: [
      {
        id: 'rolladen-schalter',
        label: 'Rolladen Schalter',
        gpio: 23,
        interval: 100,
      }
    ],
  },
  {
    id: 'schlafzimmer',
    label: 'Schlafzimmer',
    shutters: [
      {
        id: 'rolladen',
        label: 'Rolladen',
        powerGpio: 26,
        directionGpio: 20,
        ...shutterConfigBack,
        triggerButtons: [
          'rolladen-schalter'
        ],
      }
    ],
    windows: [
      {
        id: 'fenster',
        label: 'Fenster',
        gpio: 19,
        shutterId: 'rolladen',
      }
    ],
    buttons: [
      {
        id: 'rolladen-schalter',
        label: 'Rolladen Schalter',
        gpio: 16,
        interval: 100,
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
