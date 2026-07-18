'use strict'
// Looping Backwards & Nested Loop

const amir = [
    'Amirhossein',
    'Rezaei',
    'student',
    2026 - 2007,
    ['Nima', 'Matin', 'Alireza'],
    true
];

for (let i = amir.length - 1; i >= 0; i--) {
    console.log(i, amir[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting Exercise ${exercise} ---`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
    }
}