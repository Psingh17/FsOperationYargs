const argv = require('yargs').argv;
const fs = require('fs');
const readline = require('readline');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (argv._[0] == 'write') {

    rl.question('Please provide the filename:=>', (fileName) => {
        // if(fs.existsSync('./fileNameList.txt')){
       
        //     fs.readFile('fileNameList.txt',(err, cont)=>{
        //        if(err)
        //            console.log('error');              
               
        //         let x= cont.indexOf(fileName)>-1?0:1;
        //         console.log(x);
               
        //    });
        // }
        fs.writeFile('fileNameList.txt', fileName, err => {
            if (err) {
                console.log('Error occured');
                return;
            }
            fs.writeFile(fileName, 'Hello', err => {
                if (err) {
                    console.log('Error occured');
                    return

                }

            });


        });
        rl.close();

    });

}
else {
    console.log('No write operation');

}