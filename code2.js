//Swap first and last char of string 

const string = "Malvika"
const SwapStrChar = (str) => {
    const stringArray = str.split("")
    const firstEle = stringArray[0];
    stringArray[0] = stringArray[stringArray.length - 1];
    stringArray[stringArray.length - 1] = firstEle;
    const swapedString = stringArray.join("");
    return swapedString;
}
const swappedChar = SwapStrChar(string);
console.log("String after Swapping Char", swappedChar)