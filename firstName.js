// deklarera sökväg, options.

const fs = require('fs');
var firstName = 'Jimmy'
var path = `./user_${firstName}.txt`;
var options = {
    encoding: 'utf8',
    flag: 'w+'
};

// skriver filen med förnamnet
fs.writeFile(path, firstName, options, (err) =>{
    if (err){
        console.error(err);
    }
    else 
        console.log('Filer är sparad.');
    
});