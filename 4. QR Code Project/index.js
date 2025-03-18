import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
       
        {
            message:"Type in your url",
            name:"URL",

        },
    ])
    .then((answers) => {
        const url=answers.URL;
        var qr_svg = qr.image(url, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('qr-img.png'));
        fs.writeFile("Text-Generated.txt",url,(err)=>{
            if(err) throw err;
            else{
                console.log("The file has been saved");
            }
        })
        
    })
    .catch((error) => {
        if (error.isTtyError) {
            
         
        } else {
            
        }
    });