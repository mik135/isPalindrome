function isPalindrome(str) {
    if(str.length < 1) {
        return true
    }
    // Check if the first and last letters are equal
    if(str[0] == str[str.length -1]) {
        // If true, recursively call the function with a new str argument
        return isPalindrome(str.slice(1, str.length - 1));
    } else {
        return false
    }
}
