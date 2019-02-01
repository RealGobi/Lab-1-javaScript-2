const fs = require('fs');

var firstName = 'Jimmy'



var path = `./user_${firstName}.txt`;

var userTxt = JSON.stringify(firstName);

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