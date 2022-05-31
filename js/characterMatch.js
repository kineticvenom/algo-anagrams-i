exports.isCharacterMatch = function(string1, string2) {
    let cnt1 = 0
    // This regex example replaces all white space in the string with nothing. without the "" it would replace with undefined.
    let str1Lower = string1.replace(/[^\w]/g, "").toLowerCase()
    let str2Lower = string2.replace(/[^\w]/g, "").toLowerCase()
    // regexp - (/[a-zA-Z]/)
    // console.log(str2Lower)
    let arrSplit = str1Lower.split("")
    let cnt2 = str2Lower.length

    //  console.log(arrSplit)
    if (cnt2 === str1Lower.length) {    
        for (i in arrSplit) {
            //  console.log(arrSplit[i])
            if (arrSplit.includes(str2Lower[i])) {
                cnt1++;
            }
        }
    }
    if(cnt1 === cnt2) {
        return true
    } return false
    


};


// console.log(ana.isCharacterMatch('charm', 'march') === true);
// console.log(ana.isCharacterMatch('attapp', 'attack') === false);
// console.log(ana.isCharacterMatch('CharM', 'mARcH') === true);
// console.log(ana.isCharacterMatch('abcde2', 'c2abed') === true);

// console.log("This test is for the challenge quesiton");
// console.log(ana.isCharacterMatch('Anna Madrigal', 'A man and a girl') === true);