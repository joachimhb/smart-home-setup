'use strict';

const shutterConfig = {
  fullCloseMs: 6000,
};

module.exports = [
  {
    id: 'kinderzimmer',
    label: 'Kinderzimmer',
    shutters: [
      {
        id: 'main',
        label: '', // 'Fenster',
        ...shutterConfig
      }
    ],
    windows: [
      {id: 'main', label: 'Fenster'}
    ]
  },
  {
    id: 'arbeitszimmer',
    label: 'Arbeitszimmer',
    shutters: [
      {
        id: 'main',
        label: '', // 'Fenster',
        powerGpio: 22,
        directionGpio: 23,
        ...shutterConfig
      }
    ],
    windows: [
      {id: 'main', label: 'Fenster'}
    ]
  },
  {
    id: 'schlafzimmer',
    label: 'Schlafzimmer',
    shutters: [
      {
        id: 'main',
        label: '', // 'Fenster',
        ...shutterConfig
      }
    ],
    windows: [
      {id: 'main', label: 'Fenster'}
    ]
  },
  {
    id: 'bad',
    label: 'Bad',
    fans: [
      {id: 'lueftung', label: 'Lueftung'}
    ],
    lights: [
      {id: 'main', label: 'Licht'},
    ],
  },
  {
    id: 'wc',
    label: 'WC',
    fans: [
      {id: 'lueftung', label: 'Lueftung'}
    ],
    lights: [
      {id: 'main', label: 'Licht'},
    ],
  },
  // {
  //   id: 'wohnzimmer',
  //   label: 'Wohnzimmer',
  //   shutters: [
  //     {id: 'pflanzen', label: 'Pflanzen'},
  //     {id: 'essbereich', label: 'Front'},
  //     {id: 'fensterfront', label: 'Essbereich'},
  //     {id: 'balkontuer', label: 'Balkon'},
  //   ],
  //   windows: [
  //     {id: 'pflanzen', label: 'Pflanzen'},
  //     {id: 'essbereich', label: 'Front'},
  //     {id: 'fensterfront', label: 'Essbereich'},
  //     {id: 'balkontuer', label: 'Balkon'},
  //   ]
  // },
];
