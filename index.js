let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."


function stringClean(s) {
    let str = s;
    str = str.replace(/[0-9]/g, ''); // удаление цыфр из строки
    return str;
}