import { JSDOM } from 'jsdom';

// Create a new DOM environment
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

// Access the document object
const document = dom.window.document;

// Now you can use the document object just like in a browser
console.log(document.createElement('a')); // Output: Hello world
