function sortMyString(S) {
    splitString = S.split("");
    evenString = splitString.filter((e,i) => !(i & 1)).join("");
    oddString = splitString.filter((e,i) => i & 1).join("");
    return(`${evenString} ${oddString}`);
}


// string addition
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}
