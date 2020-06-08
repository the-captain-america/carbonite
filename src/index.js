import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
// Features
import Filter from './features/Filter';
import { Image } from './common/Components';

const config = {
  collections: [
    {
      _uid: 'filters',
      name: 'Filters',
      items: [
        {
          _uid: 'xyz32',
          name: 'Workflow',
          type: 'selectable'
        },
        {
          _uid: 'xyz12',
          name: 'Workflow Status',
          type: 'selectable'
        }
      ],
      actions: [
        {
          type: 'action',
          action: 'clearall',
          name: 'Clear all'
        }
      ]
    }
  ]
};

const WhatIAmBuilding = () => {
  const [selected, selectedItem] = useState(null);
  const images = [
    {
      _uid: 'xjys1',
      url: 'https://i.ibb.co/brXsS67/Screen-Shot-2020-06-04-at-12-02-06-pm.png'
    },
    {
      _uid: '2d8sl',
      url: 'https://i.ibb.co/1zrmwLn/Screen-Shot-2020-06-06-at-10-42-14-am.png'
    },
    {
      _uid: '9sdkl',
      url: 'https://i.ibb.co/7VMkRr7/Screen-Shot-2020-06-06-at-10-44-08-am.png'
    }
  ];

  const onSelect = _uid => {
    if (selected === _uid) {
      selectedItem(null);
      return;
    }
    selectedItem(_uid);
  };

  return (
    <div>
      <h1>Building:</h1>
      {images.map(item => (
        <Image
          isLarge={selected === item?._uid}
          onClick={() => onSelect(item?._uid)}
          key={item?._uid}
          src={item?.url}
          alt="problem"
        />
      ))}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(136, 136, 136)';
    return () => {
      document.body.style.backgroundColor = '#fff';
    };
  });

  return (
    <div style={{ padding: '20px' }}>
      <Filter config={config} />
      <WhatIAmBuilding />
    </div>
  );
};

render(<App />, document.getElementById('root'));
