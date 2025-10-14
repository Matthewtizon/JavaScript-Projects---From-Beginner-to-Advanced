const quoteElement = document.getElementById("quote");

const quote = ["what", "the", "hell", "is", "wrong", "with", "you"];

const usedIndex = new Set();

function generateQuote(){
    if (usedIndex.size >= quote.length) {
        usedIndex.clear()
    }

    while (true) {

        const randomQuote = Math.floor(Math.random() * quote.length);

        if (usedIndex.has(randomQuote)) continue
        
        const selectedQuote = quote[randomQuote];
        quoteElement.innerHTML = selectedQuote;
        usedIndex.add(randomQuote);
        break
    }

}


