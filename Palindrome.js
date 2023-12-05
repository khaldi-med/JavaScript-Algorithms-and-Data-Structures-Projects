function palindrome(str) {
  let alphanumeric = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let compare = alphanumeric.split('').reverse().join('');

  return alphanumeric === compare;
  
}
