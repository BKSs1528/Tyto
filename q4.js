function palindrome(word){
    // let str =""
    let wordSplited =word.split("").reverse().join("")
    if(wordSplited==word){
        return true
    }else{
        return false
    }
}

console.log(palindrome("madam"))