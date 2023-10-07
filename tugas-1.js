// program memeriksa data buah dalam suatu array
const fruits = ['apel', 'mangga', 'jeruk', 'anggur', 'semangka', 'nanas'];

// if
if (fruits.includes('anggur')){
    console.info('Buah anggur ada dalam array');
}

// else if
if (fruits.includes('persik')){
    console.info('Buah persik ada dalam array');
} else if (fruits.includes('apel')){
    console.info('Buah apel ada dalam array');
} else if (fruits.includes('lemon')){
    console.info('Buah lemon ada dalam array');
} else {
    console.info('Maaf tidak ada buah persik, apel, atau lemon dalam array.!');
}

// nested if
if (fruits.includes('lemon')){
    console.info('Buah lemon ada dalam array');
} else {
    if (fruits.includes('berry')){
        console.info('Buah berry ada dalam array');
    } else {
        console.info('Buah lemon dan berry tidak ada dalam array!');
    }
}

// program mengetahui harga tiket berdasarkan usia
const age = 19;
let ticketPrice;
// percabangan switch
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

// program untuk mencari dan mencetak nama yang dimulai dengan huruf 'L'
const oneDirection = ['Harry', 'Louis', 'Niall', 'Zayn', 'Liam'];
// perulangan for
console.info('Nama member One Direction yang dimulai dari huruf L: ');
for (let i = 0; i < oneDirection.length; i++) {
    if (oneDirection[i][0] === 'L'){
        console.info (oneDirection[i]); 
    } 
}

// program menggabung kata dalam array
const lirik1 = ['lembaran', 'foto', 'hitam-putih', 'aku', 'coba', 'ingat', 'lagi', 'warna', 'bajumu', 'kala', 'itu', 'kali', 'pertama', 'dihidupku', 'manusia', 'lain', 'memelukku'];
const lirik2 = ['lembaran', 'foto', 'hitam-putih', 'aku', 'coba', 'ingat', 'lagi', 'wangi', 'rumah', 'di sore', 'itu', 'kue cokelat', 'balon', 'warna-warni', 'pesta', 'hari', 'ulang tahunku'];

// while 
let gabungLirik1 = '';
let index = 0;
while (index < lirik1.length) {
    gabungLirik1 += lirik1[index] + ' ';
    index++
}
console.info (`Lirik lengkap pertama: \n${gabungLirik1}`);

// do while
let gabungLirik2 = '';
let j = 0;
do {
    gabungLirik2 += lirik2[j] + ' ';
    j++;
} while (j < lirik2.length);
console.info (`Lirik lengkap kedua: \n${gabungLirik2}`);

// program identifikasi golongan suhu udara
// function
function golonganSuhu(suhu) {
    if (suhu < 0) {
        return 'sangat dingin';
    } else if (suhu >= 0 && suhu <= 10) {
        return 'dingin';
    } else if (suhu >= 11 && suhu <= 20) {
        return 'sejuk';
    } else if (suhu >= 21 && suhu <= 25) {
        return 'nyaman';
    } else if (suhu >= 26 && suhu <= 30) {
        return 'hangat';
    } else if (suhu >= 31 && suhu <= 35) {
        return 'panas';
    } else {
        return 'sangat panas';
    }
}

const suhu = 24;
console.info(`${suhu} derajat Celsius tergolong ${golonganSuhu(suhu)}`);