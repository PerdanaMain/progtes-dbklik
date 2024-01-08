const antrian = [1, 2, 6, 4, 9, 3, 7, 8, 5, 10];

const pesananDiambil = [];
const pesananDitempat = [];

const process = (antrian) => {
  // push to pesananDiambil from antrian index 0 to 4
  for (let i = 0; i < 5; i++) {
    pesananDiambil.push(antrian[i]);
  }
  for (let i = 5; i < antrian.length; i++) {
    pesananDitempat.push(antrian[i]);
  }

  console.log("Pesanan Diambil : ", pesananDiambil);
  console.log("Pesanan Ditempat : ", pesananDitempat);
  console.log("Pesanan yang Dilayani : ", antrian);
};

process(antrian);
