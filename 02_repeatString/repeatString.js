const repeatString = function(word, num) {
    string = "";
    if(num < 0)
            return "ERROR"
    for(i = 0; i < num; i++)
        {
            string+=word;
        }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
