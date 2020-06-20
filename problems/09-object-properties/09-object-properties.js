/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(prop in someObj){
        console.log(prop + ": " + someObj[prop]);

    }

}


let ninja = {
    name: 'Naruto',
    age: 12,
    power: 'wind',
    warVet:true,
    alive:true,
    villains_defeated: 100

}

objectProperties(ninja);