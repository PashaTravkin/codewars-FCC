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