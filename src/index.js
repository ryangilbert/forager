import _ from 'lodash';
import './style.css';
import Leaf from './leaf.jpeg';
import printMe from './print.js';

import { createRoot } from 'react-dom/client';

// from webpack tutorial
// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   // Add the image to our existing div.
//   const myLeaf = new Image();
//   myLeaf.src = Leaf;

//   element.appendChild(myLeaf);

//   return element;
// }

// document.body.appendChild(component());

// from React tutorial

// // Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// // Render your React component instead
const root = createRoot(document.getElementById('app'));
// console.log('..............HELLO....................');
root.render(<h1>Hello, from React</h1>);
