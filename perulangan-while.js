// program menggabung kata dalam array

const lirik1 = ['lembaran', 'foto', 'hitam-putih', 'aku', 'coba', 'ingat', 'lagi', 'warna', 'bajumu', 'kala', 'itu', 'kali', 'pertama', 'dihidupku', 'manusia', 'lain', 'memelukku'];

const lirik2 = ['lembaran', 'foto', 'hitam-putih', 'aku', 'coba', 'ingat', 'lagi', 'wangi', 'rumah', 'di sore', 'itu', 'kue cokelat', 'balon', 'warna-warni', 'pesta', 'hari', 'ulang tahunku'];

// while 
let gabungLirik1 = '';
let i = 0;
while (i < lirik1.length) {
    gabungLirik1 += lirik1[i] + ' ';
    i++
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

