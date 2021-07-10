import React from 'react';
import ReactDom from 'react-dom';
import friends from '../../data/friends.json';

const link = React.createElement('a', { href: 'reactjs.org' }, 'ссылка');
console.log(link);
ReactDom.render(link, document.getElementById('root'));
