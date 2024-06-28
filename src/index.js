import _ from 'lodash';
import './style.css';
import Leaf from './leaf.jpeg';

import { createRoot } from 'react-dom/client';

// from React tutorial

// // Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

// // Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world</h1>);

// from webpack tutorial
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myLeaf = new Image();
  myLeaf.src = Leaf;

  element.appendChild(myLeaf);

  return element;
}

document.body.appendChild(component());
