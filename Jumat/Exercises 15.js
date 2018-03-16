function changeVocals (str) {

  var arrStr = str.split('');
  var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var hurufVokal = 'aiueoAIUEO';
  var indeks;
  var hasil = [];
  
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < hurufVokal.length; j++) {
      if (arrStr[i] === hurufVokal[j]) {
        indeks = alfabet.indexOf(arrStr[i]) + 1;
        arrStr[i] = alfabet[indeks];
      }
    }
    hasil.push(arrStr[i]);
  }
  
  return hasil;
}

function reverseWord (str) {

  var balik = [];
  
  for (let i = str.length - 1; i >=0; i--) {
    balik.push(str[i]);
  }
  
  return balik;
}

function setLowerUpperCase (str) {

  var hasil = '';
  
  for (let i = 0; i < str.length; i++) {
    uppercase = str[i].toUpperCase();
    lowercase = str[i].toLowerCase();
    
    if (str[i] === uppercase) {
      hasil += lowercase;
 } else if (str[i] === lowercase) {
     hasil += uppercase;
 } else {
      hasil += str[i];
 }
 }
  
  return hasil;
}

function removeSpaces (str) {
  var hasil = str.replace(/\s+/g, ''); 
  return hasil;
}

function passwordGenerator (name) {

  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    var ubahHurufVokal = changeVocals(name);
    var balikKata = reverseWord(ubahHurufVokal);
    var balikLowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(balikLowerUpper);
    return hapusSpasi;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'