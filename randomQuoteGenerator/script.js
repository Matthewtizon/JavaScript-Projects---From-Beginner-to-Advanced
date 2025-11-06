const p = document.getElementById('quote');


const set = new Set();

const quotes = ["what", "the", "hell", "sheesh"]

function generateQuote() {

    if (set.size === quotes.length) {
        set.clear()
    }
    while (true) {
        const rndIndex = Math.floor(Math.random() * quotes.length);

        if (set.has(rndIndex)) continue;

        set.add(rndIndex);
        p.innerText = quotes[rndIndex];
    
        break;
    }
    
    
        
}