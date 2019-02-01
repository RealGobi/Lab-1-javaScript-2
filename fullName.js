
// deklarerar sökvägar mm

const fs = require('fs');
var pathOne = './user_Svensson.txt';
var pathTwo = './user_Jimmy.txt';
var path = `./user_full.txt`;
var options = {
    encoding: 'utf8',
    flag: 'w+'
};

// läser in efternamn
fs.readFile(pathOne, (err, dataOne) =>{
    if (err) throw err;
        console.error(err)
// läser in förnamn   
    fs.readFile(pathTwo, (err, dataTwo) =>{
        if (err) throw err;
            console.error(err)
//  sätter ihop namnet och skriver ut i full.txt
        let fullName = dataTwo +' ' + dataOne;
        fs.writeFile(path, fullName, options, (err) =>{
            if (err) throw err;
            console.log('Dokumentet klar!');
    
        })
    })  
})