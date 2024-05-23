var quoteElement = document.getElementById("demo");
var temp, prev = 0;


function changeQuote() {
    //Generating a new number
    temp = Math.floor(Math.random() * 10);

    //Checking if the older = the newer
    if (temp == prev) {
        //Calling the function again to obtain another number
        changeQuote();
    }

    //printing a quote
    switch (temp) {
        case 0: quoteElement.innerHTML = `<h2>“A wise king never seeks out war but he must always be ready for it”</h2>`;
            break;
        case 1: quoteElement.innerHTML = `<h2>“Don’t walk in front of me… I may not follow
            Don’t walk behind me… I may not lead
            Walk beside me… just be my friend”</h2>`;
            break;
        case 2: quoteElement.innerHTML = `<h2>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</h2>`;
            break;
        case 3: quoteElement.innerHTML = `<h2>“In three words I can sum up everything I've learned about life: it goes on.”</h2>`;
            break;
        case 4: quoteElement.innerHTML = `<h2>“You only live once, but if you do it right, once is enough.”</h2>`;
            break;
        case 5: quoteElement.innerHTML = `<h2>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</h2>`;
            break;
        case 6: quoteElement.innerHTML = `<h2>“You've gotta dance like there's nobody watching,
            Love like you'll never be hurt,
            Sing like there's nobody listening,
            And live like it's heaven on earth.”</h2>`;
            break;
        case 7: quoteElement.innerHTML = `<h2>“A room without books is like a body without a soul.”</h2>`;
            break;
        case 8: quoteElement.innerHTML = `<h2>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</h2>`;
            break;
        case 9: quoteElement.innerHTML = `<h2>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</h2>`;
            break;
    }

    prev = temp;
}
