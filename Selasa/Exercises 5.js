function ubahHuruf(kata) {
  // you can only write your code here!
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var urutan = 0;
  var hurufSelanjutnya = '';
  
  for(var i = 0; i < kata.length; i ++) {
    urutan = alfabet.indexOf(kata[i]);
    hurufSelanjutnya += alfabet[urutan+1];
  }
  return hurufSelanjutnya;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu