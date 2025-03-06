// 1 uzduotis

function apskritimoPlotas(r) {
    return Math.PI * Math.pow(r, 2);
}

// 2 uzduotis

function palindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase()
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr === reverseStr
}



module.exports = [apskritimoPlotas, palindrome];
