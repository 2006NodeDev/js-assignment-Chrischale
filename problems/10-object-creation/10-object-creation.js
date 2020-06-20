/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
const player = {
    name: "Tobio",
    age: 16,
    schoolYear: 1,
    position: "Setter",
    gamesPlayed: 67,
    jersey: 9
}

//constructor function

function Player(name, age, schoolYear, position, gamesPlayed, jersey){
    this.name = name
    this.age = age
    this.schoolYear = schoolYear
    this.position = position
    this.gamesPlayed = gamesPlayed
    this.jersey = jersey
}



//es6 class

class Player_Obj{
    constructor(name, age, schoolYear, position, gamesPlayed, jersey){
        this.name = name
        this.age = age
        this.schoolYear = schoolYear
        this.position = position
        this.gamesPlayed = gamesPlayed
        this.jersey = jersey
    }
}


const player1 = new Player("Sugawara", 17, 3, "setter", 75, 2)

const player2 = new Player_Obj("Hinata", 15, 1, "spiker", 60, 10)

console.log(player1.name + ":" + player1.position);

console.log(player2.name + ":" + "\n Age: " + player2.age);

console.log(player.name+ ":" + "\n Games Played: " + player.gamesPlayed);