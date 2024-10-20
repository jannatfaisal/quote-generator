// fetching quotes with a promise

const fetchQuote = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const quotes = [
                "Be yourself: everyone else is already taken.",
                "Two things are infinite: the universe and human stupidity.",
                "so many books, so little time.",
                "A room without books is like body without a soul.",
                "In three words Ican sum up everything I've learned about: it goes on."
            ];
            const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
            resolve(randomQuote);
        },2000);

    });
};

document.getElementById("generator-quote").addEventListener("click",()=>{
    const quoteElement= document.getElementById("quote");
    quoteElement.textContent="Loading...";

    fetchQuote().then((quote)=>{
        quoteElement.textContent=quote;

    }).catch((error)=>{
        quoteElement.textContent="Failed to fetch a quote!"
    });
});