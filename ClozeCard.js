
//takes in two arguments, full text of question and part to be removed
function ClozeCard(text, cloze) {
    if (!text.includes(cloze)) {
        console.log("Error: Your question doesn't include what you want to remove. Try again.")
        return
    }

    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, "...")
}

var question = new ClozeCard("George Washington was the Pickles.", "Pickles");

