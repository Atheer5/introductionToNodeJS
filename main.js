
async function  readPlain(){
    let arrOfObj=[];
    const fs = require('fs');  
    fs.readFile('input.csv', (err, data) => {
        if (err) throw err;
        let arr=(data.toString()).split("\n");//read file line by line 
        let keys=arr[0].split(",");
        let line;
        for(let i=1;i<arr.length-1;i++){
            let dataObj={};
            line=arr[i].split(",")
            for(let j=0;j<line.length;j++){
                dataObj[keys[j]]=line[j];
            }//read all item in line 
            arrOfObj.push(dataObj);
        }//end for
        
        
    saveToFile(arrOfObj);

    });
}
//________________________________________________________________________________
async function saveToFile(arrOfObj){ 
    var util = require('util');
    const fs = require('fs');
    fs.writeFile('Users.js', util.inspect(arrOfObj), function (err) {
        if (err)
            throw err;
    console.log('Saved!');
    
    readJsonFile()
    });
   
}
//_________________________________________________________________________________
function readJsonFile(){
    const fs = require('fs');  
    fs.readFile('Users.js','utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

}
//__________________________________________________________________________________


readPlain();