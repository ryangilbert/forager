import _ from 'lodash';
import './style.css';
import Leaf from './leaf.jpeg';
import printMe from './print.js';

import { createRoot } from 'react-dom/client';

// from React tutorial

// from webpack tutorial
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack and Ryan'], ' ');
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  //   const myLeaf = new Image();
  //   myLeaf.src = Leaf;

  //   element.appendChild(myLeaf);

  return element;
}

document.body.appendChild(component());

// For testing React: https://react.dev/learn/add-react-to-an-existing-project#using-react-for-a-part-of-your-existing-page

// Create nav element
function navComponent() {
  const element = document.createElement('nav');
  element.id = 'navigation';

  return element;
}
// Append nav element to doc body
document.body.appendChild(navComponent());

// Find nav element and we will render a React component inside of it
function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}
const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
