const wordSearch = (letters, word) => { 

    // Creates new array iterates over sub array and combines into single
    // string 
    // converts each row of the grid into a string
    // horizontal letters
    const horizontalJoin = letters.map(ls => ls.join(''))

    //Creates new array and iterates over array and combines into string
    // vertical letters
    const verticalJoin = letters[0].map((col, index) => letters.map(row => row[index]));
    const verticalJoinFlipped = verticalJoin.map(col => col.join(""));

    // Chckes to see if word is in horizontal list
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
    for (let line of verticalJoinFlipped) {
        if (line.includes(word)) return true;
    }

    return false;
}

module.exports = wordSearch