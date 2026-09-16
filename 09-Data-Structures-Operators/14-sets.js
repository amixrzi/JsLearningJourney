'use strict';

const orderSet = new Set([
  'Kebab',
  'Kebab',
  'Pizza',
  'Pasta',
  'Risotto',
  'Pizza',
  'Pasta',
]);
console.log(orderSet);

console.log(new Set('Amir'));

console.log(orderSet.size);
console.log(orderSet.has('Kebab'));
console.log(orderSet.has('Shawarma'));
orderSet.add('Ghormeh sabzi');
orderSet.add('Ghormeh sabzi');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size,
);

console.log(new Set('Amixrzi').size);
