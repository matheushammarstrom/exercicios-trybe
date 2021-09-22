function encode(string) {
  let encryptedString = '';
  for (let index in string) {
    switch (string[index]) {
    case 'a':
      encryptedString = encryptedString.concat('1');
      break;
    case 'e':
      encryptedString = encryptedString.concat('2');
      break;
    case 'i':
      encryptedString = encryptedString.concat('3');
      break;
    case 'o':
      encryptedString = encryptedString.concat('4');
      break;
    case 'u':
      encryptedString = encryptedString.concat('5');
      break;
    default:
      encryptedString = encryptedString.concat(string[index]);
      break;
    }
  }
  return encryptedString;
}
function decode(string) {
  let decryptedString = '';
  for (let index in string) {
    switch (string[index]) {
    case '1':
      decryptedString = decryptedString.concat('a');
      break;
    case '2':
      decryptedString = decryptedString.concat('e');
      break;
    case '3':
      decryptedString = decryptedString.concat('i');
      break;
    case '4':
      decryptedString = decryptedString.concat('o');
      break;
    case '5':
      decryptedString = decryptedString.concat('u');
      break;
    default:
      decryptedString = decryptedString.concat(string[index]);
      break;
    }
  }
  return decryptedString;
}

module.exports = {decode, encode};
