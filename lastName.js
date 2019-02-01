const fs = require('fs');

var lastname = 'Svensson'

var path = `./user_${lastname}.txt`;

var userTxt = JSON.stringify(lastname);

var options = {
    encoding: 'utf8',
    flag: 'w+'
};

fs.writeFile(path, userTxt, options, (err) =>{
    if (err){
        console.error(err);
    }
    else 
        console.log('Filer är sparad.');
    
});