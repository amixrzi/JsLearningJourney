// Object Methods
'use strict'

const amir = {
    firstName: 'Amir',
    lastName: 'Rezaee',
    birthYeah: 2007,
    job: 'student',
    friends: ['Nima', 'Matin', 'Alireza'],
    hasDriversLicense: false,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${amir.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(amir.calcAge());

console.log(amir.age);
console.log(amir.age);
console.log(amir.age);