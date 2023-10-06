// program untuk mencari dan mencetak nama yang dimulai dengan huruf 'L'

const oneDirection = ['Harry', 'Louis', 'Niall', 'Zayn', 'Liam'];

console.info('Nama member One Direction yang dimulai dari huruf L: ');
for (let i = 0; i < oneDirection.length; i++) {
    if (oneDirection[i][0] === 'L'){
        console.info (oneDirection[i]); 
    } 
}
