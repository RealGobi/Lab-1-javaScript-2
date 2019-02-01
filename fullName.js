const fs = require('fs');

var pathOne = './user_Svensson.txt';
var pathTwo = './user_Jimmy.txt';
var path = `./user_full.txt`;
var options = {
    encoding: 'utf8',
    flag: 'w+'
};
fs.readFile(pathOne, (err, data) =>{
    if (err){
        console.error(err)
    }
    else {
        console.log(`
        Name: ${data}
        
        `)
    }
})

fs.readFile(pathTwo, (err, dataTwo) =>{
    if (err){
        console.error(err)
    }
    else {
        console.log(`
        Name: ${dataTwo}
        `)
    }
})


