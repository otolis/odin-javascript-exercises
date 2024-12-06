const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
      const currentYear = new Date().getFullYear();
      const personAge = person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : currentYear - person.yearOfBirth;
  
      
      if (!oldest || personAge > (oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth)) {
        return person; 
      }
      return oldest;
    });
  };
// Do not edit below this line
module.exports = findTheOldest;
