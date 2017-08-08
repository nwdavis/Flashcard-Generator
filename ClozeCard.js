
//takes in two arguments, full text of question and part to be removed
module.exports = function(text, cloze) {
    //checks if the cloze exists in the question
    if (!text.includes(cloze)) {
        console.log("Error: Your question doesn't include what you want to remove. Try again.")
        return
    } else {
        this.fullText = text;
        this.cloze = cloze;
        this.partial = this.fullText.replace(this.cloze, "...");
        this.printPartial = function(){
            console.log(`Question: ${this.partial}`)
        };
        this.printFullText = function(){
            console.log(`Answer: ${this.fullText}`)
        };
    }
}

