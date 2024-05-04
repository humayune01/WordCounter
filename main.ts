import inquirer from "inquirer";

let userInput = await inquirer.prompt({
    message: "Please type in small paragraph: ",
    type: "editor",
    name: "paragraph"
});

let para : string = userInput.paragraph;

let cleanPara : string = para.trim();

let regex : RegExp = /\r\n/g;

cleanPara = regex.test(cleanPara) ? cleanPara.replace(regex, " ") : cleanPara;

console.log(cleanPara);

let wordsArray : string[] = cleanPara.split(' ');

console.log(wordsArray);

let filteredWords = wordsArray.filter(word => word !== '');

console.log(`You typed ${filteredWords.length} words.`);
console.log(`You typed ${cleanPara.length} characters.`);