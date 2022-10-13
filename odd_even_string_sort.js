function sortMyString(S) {
    splitString = S.split("");
    evenIndices = splitString.filter((e,i) => !(i & 1));
    oddIndices = splitString.filter((e,i) => i & 1);
    console.log(evenIndices, oddIndices);
    return '';
}
