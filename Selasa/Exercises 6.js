function hitungHuruf(kata) {
    var str = kata.toLowerCase();
    var arr = kata.split(' ');
    var count = 0;
    var word;
  
 for(var i =0; i<arr.length; i++){
 for(var a = 0; a < arr[i].length; a++){
     var countNew = 0;
   
 for(var b =0; b<arr[i].length;b++){
      if(arr[i][a] === arr[i][b]){
        countNew ++;
      if(countNew>count){
            count = countNew;
            word = arr[i]; 
          }
        }
      }
    }
  }
  return word;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
