/*

In a party of N people, only one person is known to everyone. 
Such a person may be present at the party, if yes, (s)he doesn't know anyone at the party.
 We can only ask questions like "does A know B?". Find the stranger (celebrity) at the party.

 ~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~

 1. Sounds like a hashmap problem to me. Key would be the person, and value would be the people who know them
 2. Would also include the people they know as a value, since the celebrity knows no one.
 3. First we populate the map with all the visitors
 4. Then we loop through the visitors
    4a. In this loop, we'll do another loop that checks who this visitor knows
    4b. This loop will populate an array called "knows" and add it to the map under this visitor
    4c. It will also push this visitors' name into an array called "knownBy" for everyone they know
5. Next, we'll search the map for someone who knows no one
6. If the person who knows no one is known by everyone, return their name
*/

function findCelebrity(n, checker){

    const guests = new Map
    for(let i = 0; i < n; i++){
        const knows = []
        const knownBy = []
        guests.set(i, [knows, knownBy])
    }

    for(let i = 0; i < n; i++){

        for(let j = 0; j < n; j++){
            if(i !==j){
                if(checker(i, j)){
                    guests.get(i)[0].push(j)
                    guests.get(j)[1].push(i)
                }
            }
        }
    }

    let celeb = -1
    for(let guest of guests){
        console.log(guest[1][0].length === n-1, guest[1][1].length < 1)
        if(guest[1][0].length === n-1 && guest[1][1].length < 1){
            return guest
        }
    }

   return -1


}

module.exports = findCelebrity