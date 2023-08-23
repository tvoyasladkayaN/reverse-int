module.exports = function reverse (n) {

    let nString = Math.abs(n).toString();
    let result = "";

    for( let i = nString.length - 1 ; i >= 0 ; i-- ) {
      result += nString[i];
    }

    return Number(result);
}
