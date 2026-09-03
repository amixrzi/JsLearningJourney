'use strict';

function calcAge(birthYear) {
  const age = 2026 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, bron in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1998 && birthYear <= 2010) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Mobina';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(3,5));
    console.log(output);
  }
  printAge();

  return age;
}
const firstName = 'Amir';
calcAge(2007);
// console.log(age);
// printAge();
