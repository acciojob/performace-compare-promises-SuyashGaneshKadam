// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Promise.all
const startAll = performance.now();
await Promise.all(
  apiUrls.map(url => fetch(url))  
);
const endAll = performance.now();

document.getElementById('output-all').textContent = endAll - startAll;

// Promise.any
const startAny = performance.now();
await Promise.any(
  apiUrls.map(url => fetch(url))
);
const endAny = performance.now();

document.getElementById('output-any').textContent = endAny - startAny;

// You can write your code here
