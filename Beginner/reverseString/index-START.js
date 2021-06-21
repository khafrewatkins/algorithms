/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
        // Code goes here
       return text.split('').reverse().join('')
}

function reversededString(texts) {
    return [...text].reverse().join('')
}

function reversingString(texter) {
    let result = ''

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}

function reversationSring(textion) {
    let results = ''

    for (let char of textion) {
        results = char + results
    }
    return results
}

function reverslyString(texted) {
    if (texted === ''){
        return ''
    } else {
        return reverslyString(texted.substr(1)) + texted[0]
    }
}

function reververseString(texttext){
    return texttext.split('').reduce((acc, char) => char + acc, '')
}

function revrevString(teetext) {
    return [...teetext].reduce((accc, charr) => charr + accc, '')
}


module.exports = revrevString
module.exports = reververseString
module.exports = reverslyString
module.exports = reversationSring
module.exports = reversingString
module.exports = reversededString
module.exports = reverseString