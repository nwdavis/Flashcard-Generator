
//define basic card constructor, takes in front and back values for the card
module.exports = function(front, back) {
    this.front = front;
    this.back = back;
    this.printFront = function(){
        console.log(`Question: ${this.front}`)
    }
    this.printBack = function(){
        console.log(`Answer: ${this.back}`)
    }
}

//how would you add a prototype to an unnamed function like this one?



