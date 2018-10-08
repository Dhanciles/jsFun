const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    }

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // 'this' will reference our 'global window object'
    // on line 3 we are declaring a variable named 'fly' using the keyword const and we are assigning an es6 arrow function to the variable 'fly' 
    //since we are creating the function using an arrow function, and in the function on 4 we are logging the value of this to the console
    //the value of this is set when the function is created, and the function is created in the global scope, so the value of this will be set to the global window object
    //even though the function is assigned to a key as a method on our class and then we are assigning a new instance of our class, the value of this was set when the function was created
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // 'this' will refer to the global window object which is 'context' when 'fn' is invoked.
    // the context of 'this' is set when an ES5 function is invoked.
    // we are not 'binding' the context of 'this' to our function, so the context of 'this' will be lost 
    //by default 'this' refers to the global window object, in this case is 'context'. 
  },

  exerciseC() {
    const car = {
      make: "Tesla",
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById("btn");
    el.addEventListener("click", car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'car';
    return result;

    // Annotation: 
    // 'this' will refer to the our object 'car', because we are executing a function as a method on an object. 
    // the context of 'this' will now be set to our object 'ship due to this rule
  },

  exerciseD() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function(){
        const innerFunction = function() {
        console.log(this.breed);
      };
    
      return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' will refer to the global window object, because we are invoking an es5 function on our object. 
    // the context of 'this' is set when an es5 function is invoked, and when this function of is invoked the context of this has been lost
    // we will need to bind the value of 'this' to our object, so the context is not lost when this function is invoked. 
    
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    }


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // our function 'fn' is created using an es6 arrow function, and due to the this the context of 'this' is set when the function is created. 
    // so when we call 'fn' we will be returning the value of our 'value' variable that is now tied to our global window object
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // 'this' is set to a new instance of Hero
    // when we use the 'new operator' it will refer to our newly created object
    // in this case our newly created object is assigned to the variable storm
    // when this method is invoked as storm.identifyHero(), it will refer to a new instance of our parent class, Hero
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
    }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`)
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' will refer to our 'global window object' 
    // on line 144 we are creating a method for our class Game
    // the method is created using an es5 function
    // when the method is invoked, the context of 'this' has been lost
    // because we have not saved the value of 'this'
    // when creating a function using es5 syntax the the context is set when the function is invoked, and its value has not been saved. 
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { return this };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets)

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
  },

  exerciseJ() {
    $('#btn').on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  }

};

module.exports = context;