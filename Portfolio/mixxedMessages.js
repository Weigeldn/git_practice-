//  An Array of quotes for movie
const quote = 
[
    "Five more years and I will be done with all this, you hear me?",
    "My dream is so ridiculous that even my mum laughed when I told her about it",
    "This world is unfair so I am not suprised when the bad guy wins.",
    "You leave me no choice, I have to initiate plan B",
    "Hear me out, these aliens are friendly. Its the goverment trying to make them look like the bad guys."
];

//  An array of movie name 
const titleName = 
[
    "Boolean",
    "20 days till easter",
    "Passed out",
    "Executioner's blade",
    "Happy Case"
];
//  An array of genre for movie or tv series name
const titleGenre = 
[
    "Action",
    "Thriller",
    "Adventure",
    "Sci-fi",
    "Comedy"
];

//  A function for generating a random message
function generateMessage()
{
    //  Assigning random quote, title name and title genre
    let rQuote = quote[Math.floor(Math.random() * 5)];
    let rTitleName = titleName[Math.floor(Math.random() * 5)];
    let rTitleGenre = titleGenre[Math.floor(Math.random() * 5)];
    console.log(`Here is an idea for your movie. Your movie name should be called ${rTitleName}, the genre should be ${rTitleGenre} and in your movie you should make "${rQuote}" your movie's iconic line`);
}
// Generates random Message 
generateMessage();
