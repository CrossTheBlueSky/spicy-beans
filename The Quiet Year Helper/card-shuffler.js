/*~~~~~~~~~~~~~~~~~~~TO DO~~~~~~~~~~~~~~~~~

Make 4 decks of cards to represent each season ~~~DONE~~~~~~
Give the option to remove cards from each deck to shorten the game ~~~~~~~~DONE~~~~~
Shuffle each deck independently 
Add all shuffled decks to one usable deck in order of seasons ~~~~~~DONE~~~
Draw cards from deck
Present relevant prompt from PDF based on value of card.



*/


suits = ["Spades", "Diamonds", "Club", "Heart"];
values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

//Initializing arrays. Seasons will be populated first, then they will be modified based on 
//user-defined parameters, then they will be shuffled, then they will be combined into a full deck

fullYear = []
spring = []
summer = []
autumn = []
winter = []

for(let i = 0; i < values.length; i++)
{
    let springCard = {Season: "Spring", Day: values[i]}
    let summerCard = {Season: "Summer", Day: values[i]}
    let autumnCard = {Season: "Autumn", Day: values[i]}
    let winterCard = {Season: "Winter", Day: values[i]}

    spring.push(springCard)
    summer.push(summerCard)
    autumn.push(autumnCard)
    winter.push(winterCard)
}

//setting up variables for card removal to adjust gameplay length

cardsToRemove = 0 //this will need a button so the player can change it
min = 1 // there's 13 cards per suit in a deck, so the range is 0-12 in the array
max = 12 // I'll leave these as variables in case I ever randomly decide to add events, thus
         //making the decks bigger than a standard deck

for(j = 0; j < cardsToRemove; j++) // Only loop for as long as the player specified
{
    remover = Math.floor(Math.random() * (max - min + 1) + min); //generate the random number
    winterRemover = Math.floor(Math.random() * ((12-1) - min + 1) + min); //separate remover for winter to keep King
    spring.splice(remover-1, 1) //remove the card generated by the above code from each season
    summer.splice(remover-1, 1) // except winter, since winter needs to keep the King for the
    autumn.splice(remover-1, 1) // game to work. The -1 is since arrays are 0-indexed
    winter.splice(winterRemover-1, 1)
}





fullYear.push(spring)
fullYear.push(summer)
fullYear.push(autumn)
fullYear.push(winter)

console.log(fullYear)