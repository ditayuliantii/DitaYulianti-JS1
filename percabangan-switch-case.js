// program mengetahui harga tiket berdasarkan usia

const age = 19;
let ticketPrice;

switch (true){
    case age >= 20 && age <= 25:
        ticketPrice = 50;
        break;
    case age >= 10 && age < 20:
        ticketPrice = 45;
        break;
    case age < 10:
        ticketPrice = 30;
        break;
    default:
        ticketPrice = 60;
}

console.info(`Harga tiket untuk usia ${age} tahun adalah ${ticketPrice}K`);