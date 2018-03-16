function penjualan (nama_produk,leftOver) {
  this.product = nama_produk;
  this.shoppers = [];
  this.leftOver = leftOver;
  this.totalProfit = 0;
}

function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  sepatu = new penjualan(listBarang[0][0], listBarang[0][2]);
  baju = new penjualan(listBarang[1][0], listBarang[1][2]);
  sweater = new penjualan(listBarang[2][0], listBarang[2][2]);
  for (var i = 0; i < shoppers.length; i++) {
    if (shoppers[i].product === listBarang[0][0]) {
      if (shoppers[i].amount <= sepatu.leftOver) {
        sepatu.shoppers.push(shoppers[i].name);
        sepatu.leftOver -= shoppers[i].amount;
        sepatu.totalProfit += shoppers[i].amount * listBarang[0][1];
      }
    }
    if (shoppers[i].product === listBarang[1][0]) {
      if (shoppers[i].amount <= baju.leftOver) {
        baju.shoppers.push(shoppers[i].name);
        baju.leftOver -= shoppers[i].amount;
        baju.totalProfit += shoppers[i].amount * listBarang[1][1];
      }
    }
    if (shoppers[i].product === listBarang[2][0]) {
      if (shoppers[i].amount <= sweater.leftOver) {
        sweater.shoppers.push(shoppers[i].name);
        sweater.leftOver -= shoppers[i].amount;
        sweater.totalProfit += shoppers[i].amount * listBarang[2][1];
      }
    }
  }
  var daftar_penjualan = {sepatu, baju, sweater};
  return daftar_penjualan;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]