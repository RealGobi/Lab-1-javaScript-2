// deklarera sökväg, options.

const fs = require('fs');
var lastname = 'Svensson'
var path = `./user_${lastname}.txt`;
var options = {
    encoding: 'utf8',
    flag: 'w+'
};

// skriver filen med efternamnet
fs.writeFile(path, lastname, options, (err) =>{
    if (err){
        console.error(err);
    }
    else 
        console.log('Filer är sparad.');
    
});