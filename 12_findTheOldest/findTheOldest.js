const findTheOldest = function(a) {
    return a.reduce((oldest, person) => {
        return getAge(oldest) < getAge(person) ? person : oldest; 
    });
};

function getAge(person) {
    return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
