// USING CLASSES ---------------------------------------------------------------------
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
        this.getAge = function() {return `Age is ${this.age}`}      
    } 
    getInfo() {
        let bio = `${this.firstName} is ${this.age}.`
    
        this.likes.forEach(like => {bio += ` ${this.firstName} likes ${like}.`})
        return bio 
    }
    setName(fullName) {
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1] 
    }
}
 
const meo = new Person("Ikrom", "Numonov", 18, ["Teaching"])
console.log(meo.getInfo())

// -----------------------------------------------------------------------------------



const me = new Person("Ikrom", "Numonov", 18, ["Teaching", "Biking"])
me.setName("Anor Gulamov")
console.log(me.getInfo())

const person2 = new Person("Clancey", "Turner", 51)
console.log(person2.getInfo())

