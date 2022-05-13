let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."


function stringClean(s) {
    let str = s;
    str = str.replace(/[0-9]/g, ''); // удаление цыфр из строки
    return str;
}

function isIsogram(str) {
    var i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i) {
        for (j = i + 1; j < str.length; ++j) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

const someAdjective = "аккккккк";
let myStr = "Learning to code is ";
myStr += someAdjective


let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

const lastName = "Lovelace";


const lastLetterOfLastName = lastName[lastName.length - 1]


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;


const myArray = [50, 60, 70];
let myData = myArray[0];