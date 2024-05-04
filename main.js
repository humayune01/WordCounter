import inquirer from "inquirer";
let userInput = await inquirer.prompt({
    message: "Please type in small paragraph: ",
    type: "editor",
    name: "paragraph"
});
let para = userInput.paragraph;
let cleanPara = para.trim();
let regex = /\r\n/g;
cleanPara = regex.test(cleanPara) ? cleanPara.replace(regex, " ") : cleanPara;
console.log(cleanPara);
let wordsArray = cleanPara.split(' ');
console.log(wordsArray);
let filteredWords = wordsArray.filter(word => word !== '');
console.log(`You typed ${filteredWords.length} words.`);
console.log(`You typed ${cleanPara.length} characters.`);
