const { instructors, cohorts } = require('./datasets/turing');
const { constellations, stars } = require('./datasets/astronomy');
const { cakes } = require('./datasets/cakes');
const { pie } = require('./datasets/pie');
const { clubs } = require('./datasets/clubs');
const { classrooms } = require('./datasets/classrooms');
const { mods } = require('./datasets/mods');
const { bosses, sidekicks } = require('./datasets/bosses');
const { breweries } = require('./datasets/breweries');


// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 35

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 11 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};


// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(instructor => {
      let newInstructor = {name: instructor.name}
      let matchingMod = cohorts.find(cohort => cohort.module === instructor.module)
      newInstructor.studentCount = matchingMod.studentCount
      return newInstructor
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We are given two arrays, and we want to return an array of the same length. We are going to reach for a map because each element in our instructor array has a key of instructor. We will interate over our instuctor array first. 
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((obj, cohort) => {
    let key = `cohort${cohort.cohort}`
    let instructorCount = instructors.filter(instructor => instructor.module === cohort.module).length
    let studentsPerInstructor = cohort.studentCount / instructorCount
    
    obj[key] = studentsPerInstructor
    return obj
    }, {}); 
    return result;

    // Annotation:
  //  We are given two arrays, and we want to return the an object of object where our keys are are the cohort and value is students per instructor. We are going to reach for a reduce because of it's flexibility, with it being able to divide our total amount of students by how many instructors teach each module. To do this I will first iterate over our cohorts to create our key. Then I will iterate over our instuctors and return an array where each element is our instuctors that match that module, and I will use the length of that array, and divide our cohort student count by the length. 
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = instructors.reduce((obj, instructor) => {
    let name = instructor.name
    obj[name] = []
    instructor.teaches.forEach(lesson => {
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(subject => {
          if (lesson === subject && !obj[name].includes(cohort.module)) {
            obj[name].push(cohort.module)
          }
        })
      })
    })
    return obj
    }, {}); 
    return result;

    // Annotation:
    // We are given two arrays, and we want to return an object. In this object our keys will be each instructor and it's value will be the modules each instructor can teach. To do this I will reach for a reduce, because of it's flexibility it will return an object where we can dynamically create our key value pairs. We first want to iterate over our instructors set each name as our key, then we will iterate over our cohort and find the modules our instructors can teach based off of their what they teach and each cohorts curriculum. 
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((obj, cohort) => {
      cohort.curriculum.forEach(subject => {
        if (!obj[subject]) {
          obj[subject] = []
        }
        instructors.forEach(instructor => {
          instructor.teaches.forEach(lesson => {
            if (!obj[subject].includes(instructor.name) && lesson === subject) {
              obj[subject].push(instructor.name)
            } 
          })
        })
      })
      return obj
      }, {}); 
    return result;

    // Annotation:
    // We are given two arrays and we want to return an object. Our keys in our object will be our curriculum and their value will be an array of instructors that can teach the curriculum. To create this object we will use a reduce due to it's flexibility. We first will iterate over each cohorts curriculum to create our keys, then we will iterate over our instructors to then add the names of our instructors who can teach that curriculum to our array
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      let count = mod.students / mod.instructors
      return {mod: mod.mod, studentsPerInstructor: count}
    });
    return result;

    // Annotation:
    // We are given an array and we want to return an array,  where each element is an object where our key value pairs are our mod and mod number, and the amount of students per instructor per mod. 
    // To do this I will reach for .map(), because this will allow us to return an array of the same length, and allow us to find our students per instructor on each iteration.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(room => room.program === 'FE')
    return result;

    // Annotation:
    //  We are given an array and we want to return an array of all elements where their key of program is assigned to a string of 'FE'. 
    // To do this I will reach for a .filter(), because it will allow us to return an array with all elements that return true based on our condition
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((obj, room) => {
      if (room.program === 'FE') {
        obj.feCapacity += room.capacity
      } else {
        obj.beCapacity += room.capacity
      }
      return obj
    }, {feCapacity: 0, beCapacity: 0})
    return result;

    // Annotation:
    // We are given an array and we want to return an object where our keys are a fe and beCapacity, and their values are the total capacity for all rooms. To do this I will reach for a .reduce(), because of it's flexibility it will allow us to create our object and on each iteration increase our value for our capacities
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a,b) => {
      return a.capacity > b.capacity
    })
    return result;

    // Annotation:
    // We are given an array and we want to return an array where our elements are sorted by room capacity. 
    // But we want to sort our elements from least capacity to the gratest. 
    // To do this I will reach for a .sort(), because we want to return an array of the same length and organize our array based on the condition we give it 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((arr, cake) => {
      cake.toppings.forEach(topping => {
        if(!arr.includes(topping)){
          arr.push(topping)
        }
      })
      return arr
    }, []);
    return result;

    // Annotation:
    // We are given an array. We want to return an array. I will reach for a reduce, because of its flexibility. The values I want are stored in an array. I would have to use a forEach method to iterate through those elements and add them to our array. 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((obj, cake) => {
      cake.toppings.forEach(topping => {
        if (!obj[topping]) {
          obj[topping] = 1
        } else {
          obj[topping]++
        }
      }); 
      return obj
    }, {}); 
    return result;

    // Annotation:
  //  We are given an array. We want to return an object where our keys are each topping in our toppings array. The value of each key will be the number of times the unique toppings appear in our different toppings array. I am going to reach for a reduce method to create this object,  because of its flexibility will allow us to dynamically create each key. To find the value for our key we will have to use forEach method, because will allow me to create our creat through each iteration of our topping, but I can also check if that key has already been created if it has we want to increment our current key value each time it has been found.
   
  },

  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'honey', inStock: 3 },
    //    { flavor: 'vanilla', inStock: 21 },
    //    ..etc
    // ]

    const result = cakes.map(cake => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock}
    });
    return result;

    // Annotation:
    // We are given an Array. We want to return an Array, where each element in our array is an object. The objects will have two key value pairs. Our first key value pair will match each cake flavor we have so we will use the .map() method to return our cakeFlavor as our first value, and it will also return our second value which is the inStock value of each object
  },

  totalInventory() {
    // Return the total amout of cakes in stock e.g.
    // 59

    const result = cakes.reduce((sum, cake) => {
      sum += cake.inStock
      return sum
    }, 0);
    return result;

    // Annotation:
    // We are given an Array. In our array each element is an Object. In each object there is a key 'inStock', and it's value is a number. We want to return the sum off all of these key value pairs in our object. To do this I will reach for using a .reduce(), because of it's flexibility, it can return this single value to us
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]
    const result = cakes.filter(cake => cake.inStock)
    return result;
  }
    // Annotation: 
    // Receiving an array of cakes, and I want to return a subset of that array, so I am going to reach for a filter. Any cake that has 0 as it's value for inStock will not be returned, because 0 is falsy. 

};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------







// DATASET: pie from ./datasets/pie
const piePrompts = {
  howManyIngredients() {
    // The bakery needs to make more rhubarb pies in order to meet the
    // desiredInventoryCount. Programmatically determine how many more pies
    // need to be made, and return an object of the total number of ingredients we need
    // we need to buy in order to make the remaining pies. e.g.:
    // {
    //   cinnamon: 50,
    //   sugar: 100
    // }

    const result = 
    // const keys = Object.keys(pies)
    'Hello'
    
    // ;
    return result;

    // Annotation:
    // We are given an object and we want to return an object where keys our ingredients and the value is the total ingredients we will need to make our desiredInventoryCount of pies
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((obj, club) => {
      club.members.forEach(member => {
        if (!obj[member] || !obj[member].includes(club.club)) {
          obj[member] = [club.club]
        } else {
          obj[member].push(club.club)
        } 
        if (!obj[member].includes(club.club)) {
          obj[member].push(club.club)
        }
      })
      return obj 
    }, {});
    return result;

    // Annotation:
    // We are given an array and we want to return an object, where our keys are the menbers of our clubs, and thier value is an array of the clubs they are members of. 
    // To do this I will reach for .reduce(), because of it's flexibility and how we can dynamically create our key value pairs on each iteration
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const evilLords = Object.keys(bosses)
    const result = evilLords.map(boss => {
      let obj = {}
      obj.bossName = bosses[boss].name
      obj.sidekickLoyalty = 0 
      sidekicks.forEach(sidekick => {
        if (sidekick.boss === bosses[boss].name) {
          obj.sidekickLoyalty += sidekick.loyaltyToBoss
        }
      })
      return obj 
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // const bosses = {boss:{}}
    // const sidekicks = [{}]
    // We are given two datasets, one is an object and the other is an array
    // We want to return an object with two keys
    //  the first is a key of 'bossName' and it's value is a string with the name of our boss
    // the second key is 'sidekickLoyalty' and it's value is the total loyalty is the totatal loyalty from all sidekicks of our boss
    // to do this I will reach a .map() we need to return an array of the same length as our bosses, but to iterate over our sidekicks we will check if our boss name matches the boss of the sidekick we are iterating over and once we do that we will want to return that value to out sidekickLoyalty and increment that value each time we have a match 
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.reduce((arr, cat) => {
      if (cat.color === 'orange') {
        arr.push(cat.name)
      }
      return arr
    }, []);
    return result;

    // Annotation:
    // we are given an array and we want to return an array 
    // the elements in our new array will be the names of our cats that have a color of orange 
    // to this this I will reach for .reduce() due to it's flexibilty it will allow us to return a single value that only returns the value from our element on each iteration
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => {
      return a.age > b.age
    });
    return result;

    // Annotation:
    //we are given an array, and we want to sort our array by the age of the cats in our array. 
    // to do this I will reach for .sort, this will allow us to sort our cats by age on each iteration
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    const result = kitties.map(cat => {
      cat.age += 2
      return cat 
    })
    return result; 
  },
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // we are given two data sets, one is an object and the other is an array
    // const constellations = {{}}
    // const stars = [{}]
    //  and we want to return an array with all elements from our 
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



module.exports = {
  breweryPrompts,
  turingPrompts,
  piePrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  astronomyPrompts
};