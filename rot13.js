function rot13(str) {
  let arr = str.split('');
  console.log(arr)

  let arr2 = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet = alphabet.toUpperCase();

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (/[A-Z]/.test(char)) {
      let index = alphabet.indexOf(char);
      let newIndex = (index + 13) % 26;
      arr2.push(alphabet[newIndex]);
    } else {
      arr2.push(char);
    }
  }

  return arr2.join('');
}
