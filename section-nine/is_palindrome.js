console.log('false: ', isPalindrome('awesome')); // false
console.log('false: ', isPalindrome('foobar')); // false
console.log('true: ', isPalindrome('tacocat')); // true
console.log('true: ', isPalindrome('amanaplanacanalpanama')); // true
console.log('false: ', isPalindrome('amanaplanacanalpandemonium')); // false

function isPalindrome(reverse_str){
  function reverse(str) {
    if (str === '') return '';
    return str.slice(-1).concat(reverse(str.slice(0,-1)));
  }

  return reverse_str === reverse(reverse_str);
}
