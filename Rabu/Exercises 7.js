function digitPerkalianMinimum(angka) {
  var hasil = [];
  for(var i = 0; i <= angka; i ++){
    for(var j = 0; j <= angka; j++){
      if(i * j === angka){
        var join = i.toString() + j.toString();
        hasil.push(join);
      }
    }
  }
  var minimumSementara = hasil[0].length;
  for(var p = 0; p < hasil.length; p++){
    if(hasil[p].length < minimumSementara){
      minimumSementara = hasil[p].length;
    }
  }
  return minimumSementara;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2