//You should return a given string in reverse order.
function backwardString(value) {
    var valueReturned = "";
    for (var i = value.length - 1; i >= 0; i--) {
        valueReturned += value[i];
    }
    return valueReturned;
}
console.log("Example:");
console.log(backwardString("val"));
