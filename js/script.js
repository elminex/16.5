let tweetLink = "https://twitter.com/intent/tweet?text=";
const quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
    fetch(quoteUrl, { cache: "no-store" })
        .then((resp) => resp.json())
        .then(createTweet());
}

function createTweet(input) {
    const data = input[0];
    const dataElement = documen.createElement('div');
    dataElement.innerHTML = data.content;
    let quoteText = dataElement.innerText.trim();
    let quoteAuthor = data.title;
    if (!quoteAuthor.length) {
        quoteAuthor = "Unknown author";
    }
}