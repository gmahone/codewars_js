function vertMirror(strng) {
    let result = strng.split("\n").map(a => a.split("").reverse().join("")).join("\n");
    return result;
}
function horMirror(strng) {
    let result = strng.split("\n").reverse().join("\n");
    return result;
}
function oper(fct, s) {
    return fct(s);
}
